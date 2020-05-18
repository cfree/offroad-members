import { monthInMs } from '../utils';
import { subDays } from 'date-fns';

const Trail = {
  // Pattern borrowed from playbook:
  // https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-add-a-custom/computed-field-to-a-prisma-model-via-the-application-schema-prisma-bindings
  async avgDifficulty(parent: any, args: any, ctx: any, info: any) {
    // Get all difficulties from run reports for this trail
    const reports = await ctx.db.query.runReports({
      where: {
        trail: { id: parent.id },
      },
    });

    // Convert to array
    const scale: any = {
      UNKNOWN: 0,
      BEGINNER: 1,
      INTERMEDIATE: 2,
      ADVANCED: 3,
    };

    // Determine total
    const counts = reports.reduce(
      (accumulator: any, report: any) => scale[report.difficulty] + accumulator,
      0,
    );

    if (counts) {
      const avg = Math.round(counts / reports.length);
      const entries = Object.entries(scale);
      // console.log("entries", entries);
      const avgDifficulty: any = entries.find((entry) => avg === entry[1]);

      return avgDifficulty[0];
    }

    return 'UNKNOWN';
  },
  async avgRatings(parent: any, args: any, ctx: any, info: any) {
    // Get all ratings from run reports and checkins for this trail, determine average
    // Get all difficulties from run reports for this trail
    const reports = await ctx.db.query.runReports({
      where: {
        trail: { id: parent.id },
      },
    });

    // Determine total
    const counts = reports.reduce(
      (accumulator: any, report: any) => report.rating + accumulator,
      0,
    );

    if (counts) {
      const avgRatings = (counts / reports.length).toPrecision(3);
      return avgRatings;
    }

    return 0;
  },
  async currentConditions({ id }: any, args: any, ctx: any, info: any) {
    // Find last condition reported within the last 30 days
    const conditions = await ctx.db.query.conditions({
      where: {
        report: {
          AND: [
            { trail: { id } },
            { startTime_lte: new Date(Date.now() - monthInMs) },
          ],
        },
      },
      first: 1,
    });

    if (conditions.length > 0) {
      return conditions[0].status;
    }

    return 'UNKNOWN';
  },
  async conditionsLastReported({ id }: any, args: any, ctx: any, info: any) {
    // Get count of all people who favorited this trail
    // Find last condition reported within the last 30 days
    const conditions = await ctx.db.query.conditions({
      where: {
        report: {
          AND: [
            { trail: { id } },
            { startTime_lte: new Date(Date.now() - monthInMs) },
          ],
        },
      },
      first: 1,
    });

    if (conditions.length > 0) {
      return conditions[0].dateReported;
    }

    return null;
  },
  async favoriteCount({ id }: any, args: any, ctx: any, info: any) {
    // Get count of all people who favorited this trail
    const reports = await ctx.db.query.runReports({
      where: {
        AND: [{ trail: { id } }, { favorite: true }],
      },
    });

    return reports.length;
  },
};

export default Trail;
