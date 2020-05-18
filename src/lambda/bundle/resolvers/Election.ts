import { addFragmentToInfo } from 'graphql-binding';

const Election = {
  races(parent: any, args: any, ctx: any, info: any) {
    const fragment = `fragment Result on Ballot { id }`;
    return ctx.db.query.ballots({}, addFragmentToInfo(info, fragment));
  },
};

export default Election;
