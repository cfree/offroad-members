(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./graphql.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle/app.ts":
/*!***********************!*\
  !*** ./bundle/app.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generated */ "./bundle/generated/index.ts");






dotenv__WEBPACK_IMPORTED_MODULE_4___default.a.config({
  path: '.env'
});
const corsOptions = {
  credentials: true,
  origin: process.env.FRONTEND_URL
};
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()(corsOptions));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()()); // app.get('/graphql', (req, res) => res.send('meow'));
// Decode the JWT to get user ID on each request

app.use(async (req, res, next) => {
  const {
    token
  } = req.cookies;

  if (token) {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, String(process.env.JWT_SECRET));
    req.userId = userId;
  }

  next();
}); // See info about the user if logged in

app.use(async (req, res, next) => {
  if (!req.userId) {
    return next();
  }

  const fragment = `
    fragment LoggedInUser on User {
      id
      role
      accountType
      accountStatus
      email
      firstName
      lastName
      username
    }
  `;
  const user = await _generated__WEBPACK_IMPORTED_MODULE_5__["prisma"].user({
    id: req.userId
  }).$fragment(fragment);
  req.user = user;
  next();
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./bundle/config.ts":
/*!**************************!*\
  !*** ./bundle/config.ts ***!
  \**************************/
/*! exports provided: roles, accountStatus, accountType, offices, titles, emailGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roles", function() { return roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountStatus", function() { return accountStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountType", function() { return accountType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offices", function() { return offices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailGroups", function() { return emailGroups; });
// Deprecated in favor of roles
// 'permissions': [
//   'DASHBOARD_AREA', // All except locked/inactive/resigned/removed
//   'ADMIN_AREA', // Board, admin
//   'VOTE_READ', // Full member
//   'USER_DELETE', // Admin
//   'ROSTER_READ', // Full members, emeritus, board, admin
//   'PERMISSION_UPDATE', // Admin
// ],
const roles = ['ADMIN', // Manage permissions
'OFFICER', // Administrative area
'RUN_MASTER', // Able to create events
'RUN_LEADER', // Able to view extra event details, log run report
'USER' // DEFAULT
];
const accountStatus = ['ACTIVE', 'PAST_DUE', // account overdue - active, must pay
'DELINQUENT', // account 3 months to 1 year overdue - locked, contact, must pay
'INACTIVE', // account 1+ year overdue - locked, contact
'REMOVED', // cannot do anything - locked, contact
'RESIGNED', // cannot do anything - locked, contact
'LIMITED', // attended too many runs - locked, must become member
'LOCKED' // DEFAULT - must be approved
];
const accountType = ['FULL', 'ASSOCIATE', // No voting rights, no member's only events/discussion
'EMERITUS', // Same as Associate
'GUEST' // DEFAULT - confirmed user. No roster, no voting rights, no member's only events/discussion
];
const offices = {
  PRESIDENT: 'President',
  // unique
  VICE_PRESIDENT: 'Vice President',
  // unique
  SECRETARY: 'Secretary',
  // unique
  TREASURER: 'Treasurer' // unique

};
const titles = {
  WEBMASTER: 'Webmaster',
  // unique
  RUN_MASTER: 'Run Master',
  // unique
  RUN_LEADER: 'Run Leader',
  EMERITUS_MEMBER: 'Emeritus Member',
  CHARTER_MEMBER: 'Charter Member'
};
const emailGroups = ['officers', 'runmaster', 'webmaster', 'run_leaders', 'full_membership', // Membership announcement, membership newsletter
'all_active', // Events, general announcements
'guests', 'all_users' // EVERYONE EVER
];
/**
 * Check Logged-in
 * Check Role
 * Check Account Status
 */

/***/ }),

/***/ "./bundle/generated/index.ts":
/*!***********************************!*\
  !*** ./bundle/generated/index.ts ***!
  \***********************************/
/*! exports provided: models, Prisma, prisma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "models", function() { return models; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prisma", function() { return Prisma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prisma", function() { return prisma; });
/* harmony import */ var prisma_client_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prisma-client-lib */ "prisma-client-lib");
/* harmony import */ var prisma_client_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prisma_client_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma-schema */ "./bundle/generated/prisma-schema.ts");
// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/



/**
 * Model Metadata
 */
const models = [{
  name: "Role",
  embedded: false
}, {
  name: "AccountStatus",
  embedded: false
}, {
  name: "AccountType",
  embedded: false
}, {
  name: "Office",
  embedded: false
}, {
  name: "Title",
  embedded: false
}, {
  name: "Poll",
  embedded: false
}, {
  name: "TrailDifficulty",
  embedded: false
}, {
  name: "MigrationStatus",
  embedded: false
}, {
  name: "RSVPStatus",
  embedded: false
}, {
  name: "TrailCondition",
  embedded: false
}, {
  name: "Gender",
  embedded: false
}, {
  name: "OutfitLevel",
  embedded: false
}, {
  name: "ActivityMessageCode",
  embedded: false
}, {
  name: "MembershipMessageCode",
  embedded: false
}, {
  name: "EventType",
  embedded: false
}, {
  name: "Registration",
  embedded: false
}, {
  name: "User",
  embedded: false
}, {
  name: "ContactInfo",
  embedded: false
}, {
  name: "Preference",
  embedded: false
}, {
  name: "UserMeta",
  embedded: false
}, {
  name: "Event",
  embedded: false
}, {
  name: "RSVP",
  embedded: false
}, {
  name: "Trail",
  embedded: false
}, {
  name: "RunReport",
  embedded: false
}, {
  name: "Condition",
  embedded: false
}, {
  name: "Bandaid",
  embedded: false
}, {
  name: "Election",
  embedded: false
}, {
  name: "Ballot",
  embedded: false
}, {
  name: "Vote",
  embedded: false
}, {
  name: "Vehicle",
  embedded: false
}, {
  name: "ActivityLogItem",
  embedded: false
}, {
  name: "MembershipLogItem",
  embedded: false
}, {
  name: "RigImage",
  embedded: false
}, {
  name: "CloudinaryImage",
  embedded: false
}];
/**
 * Type Defs
 */

const Prisma = Object(prisma_client_lib__WEBPACK_IMPORTED_MODULE_0__["makePrismaClientClass"])({
  typeDefs: _prisma_schema__WEBPACK_IMPORTED_MODULE_1__["typeDefs"],
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
const prisma = new Prisma();

/***/ }),

/***/ "./bundle/generated/prisma-schema.ts":
/*!*******************************************!*\
  !*** ./bundle/generated/prisma-schema.ts ***!
  \*******************************************/
/*! exports provided: typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
const typeDefs =
/* GraphQL */
`enum AccountStatus {
  ACTIVE
  PAST_DUE
  DELINQUENT
  REMOVED
  RESIGNED
  INACTIVE
  LIMITED
  LOCKED
}

enum AccountType {
  FULL
  ASSOCIATE
  EMERITUS
  GUEST
}

type ActivityLogItem {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  time: DateTime!
  message: String!
  messageCode: ActivityMessageCode!
  user: User!
  link: String
}

type ActivityLogItemConnection {
  pageInfo: PageInfo!
  edges: [ActivityLogItemEdge]!
  aggregate: AggregateActivityLogItem!
}

input ActivityLogItemCreateInput {
  id: ID
  time: DateTime!
  message: String!
  messageCode: ActivityMessageCode!
  user: UserCreateOneWithoutActivityLogInput!
  link: String
}

input ActivityLogItemCreateManyWithoutUserInput {
  create: [ActivityLogItemCreateWithoutUserInput!]
  connect: [ActivityLogItemWhereUniqueInput!]
}

input ActivityLogItemCreateWithoutUserInput {
  id: ID
  time: DateTime!
  message: String!
  messageCode: ActivityMessageCode!
  link: String
}

type ActivityLogItemEdge {
  node: ActivityLogItem!
  cursor: String!
}

enum ActivityLogItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  time_ASC
  time_DESC
  message_ASC
  message_DESC
  messageCode_ASC
  messageCode_DESC
  link_ASC
  link_DESC
}

type ActivityLogItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  time: DateTime!
  message: String!
  messageCode: ActivityMessageCode!
  link: String
}

input ActivityLogItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  messageCode: ActivityMessageCode
  messageCode_not: ActivityMessageCode
  messageCode_in: [ActivityMessageCode!]
  messageCode_not_in: [ActivityMessageCode!]
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  AND: [ActivityLogItemScalarWhereInput!]
  OR: [ActivityLogItemScalarWhereInput!]
  NOT: [ActivityLogItemScalarWhereInput!]
}

type ActivityLogItemSubscriptionPayload {
  mutation: MutationType!
  node: ActivityLogItem
  updatedFields: [String!]
  previousValues: ActivityLogItemPreviousValues
}

input ActivityLogItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityLogItemWhereInput
  AND: [ActivityLogItemSubscriptionWhereInput!]
  OR: [ActivityLogItemSubscriptionWhereInput!]
  NOT: [ActivityLogItemSubscriptionWhereInput!]
}

input ActivityLogItemUpdateInput {
  time: DateTime
  message: String
  messageCode: ActivityMessageCode
  user: UserUpdateOneRequiredWithoutActivityLogInput
  link: String
}

input ActivityLogItemUpdateManyDataInput {
  time: DateTime
  message: String
  messageCode: ActivityMessageCode
  link: String
}

input ActivityLogItemUpdateManyMutationInput {
  time: DateTime
  message: String
  messageCode: ActivityMessageCode
  link: String
}

input ActivityLogItemUpdateManyWithoutUserInput {
  create: [ActivityLogItemCreateWithoutUserInput!]
  delete: [ActivityLogItemWhereUniqueInput!]
  connect: [ActivityLogItemWhereUniqueInput!]
  set: [ActivityLogItemWhereUniqueInput!]
  disconnect: [ActivityLogItemWhereUniqueInput!]
  update: [ActivityLogItemUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ActivityLogItemUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ActivityLogItemScalarWhereInput!]
  updateMany: [ActivityLogItemUpdateManyWithWhereNestedInput!]
}

input ActivityLogItemUpdateManyWithWhereNestedInput {
  where: ActivityLogItemScalarWhereInput!
  data: ActivityLogItemUpdateManyDataInput!
}

input ActivityLogItemUpdateWithoutUserDataInput {
  time: DateTime
  message: String
  messageCode: ActivityMessageCode
  link: String
}

input ActivityLogItemUpdateWithWhereUniqueWithoutUserInput {
  where: ActivityLogItemWhereUniqueInput!
  data: ActivityLogItemUpdateWithoutUserDataInput!
}

input ActivityLogItemUpsertWithWhereUniqueWithoutUserInput {
  where: ActivityLogItemWhereUniqueInput!
  update: ActivityLogItemUpdateWithoutUserDataInput!
  create: ActivityLogItemCreateWithoutUserInput!
}

input ActivityLogItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  messageCode: ActivityMessageCode
  messageCode_not: ActivityMessageCode
  messageCode_in: [ActivityMessageCode!]
  messageCode_not_in: [ActivityMessageCode!]
  user: UserWhereInput
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  AND: [ActivityLogItemWhereInput!]
  OR: [ActivityLogItemWhereInput!]
  NOT: [ActivityLogItemWhereInput!]
}

input ActivityLogItemWhereUniqueInput {
  id: ID
}

enum ActivityMessageCode {
  EVENT_ATTENDED
  RUN_LEAD
  EVENT_REVIEW_SUBMITTED
  RUN_REPORT_SUBMITTED
  GALLERY_PHOTO_SUBMITTED
  GALLERY_PHOTOS_SUBMITTED
  PROFILE_PHOTO_SUBMITTED
  RIGBOOK_PHOTO_SUBMITTED
  JOINED
}

type AggregateActivityLogItem {
  count: Int!
}

type AggregateBallot {
  count: Int!
}

type AggregateBandaid {
  count: Int!
}

type AggregateCloudinaryImage {
  count: Int!
}

type AggregateCondition {
  count: Int!
}

type AggregateContactInfo {
  count: Int!
}

type AggregateElection {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateMembershipLogItem {
  count: Int!
}

type AggregatePreference {
  count: Int!
}

type AggregateRegistration {
  count: Int!
}

type AggregateRigImage {
  count: Int!
}

type AggregateRSVP {
  count: Int!
}

type AggregateRunReport {
  count: Int!
}

type AggregateTrail {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserMeta {
  count: Int!
}

type AggregateVehicle {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type Ballot {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  desc: String
  candidates(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type BallotConnection {
  pageInfo: PageInfo!
  edges: [BallotEdge]!
  aggregate: AggregateBallot!
}

input BallotCreateInput {
  id: ID
  title: String!
  desc: String
  candidates: UserCreateManyWithoutCandidateForInput
  votes: VoteCreateManyWithoutBallotInput
}

input BallotCreateManyInput {
  create: [BallotCreateInput!]
  connect: [BallotWhereUniqueInput!]
}

input BallotCreateManyWithoutCandidatesInput {
  create: [BallotCreateWithoutCandidatesInput!]
  connect: [BallotWhereUniqueInput!]
}

input BallotCreateOneWithoutVotesInput {
  create: BallotCreateWithoutVotesInput
  connect: BallotWhereUniqueInput
}

input BallotCreateWithoutCandidatesInput {
  id: ID
  title: String!
  desc: String
  votes: VoteCreateManyWithoutBallotInput
}

input BallotCreateWithoutVotesInput {
  id: ID
  title: String!
  desc: String
  candidates: UserCreateManyWithoutCandidateForInput
}

type BallotEdge {
  node: Ballot!
  cursor: String!
}

enum BallotOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  desc_ASC
  desc_DESC
}

type BallotPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  desc: String
}

input BallotScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  AND: [BallotScalarWhereInput!]
  OR: [BallotScalarWhereInput!]
  NOT: [BallotScalarWhereInput!]
}

type BallotSubscriptionPayload {
  mutation: MutationType!
  node: Ballot
  updatedFields: [String!]
  previousValues: BallotPreviousValues
}

input BallotSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BallotWhereInput
  AND: [BallotSubscriptionWhereInput!]
  OR: [BallotSubscriptionWhereInput!]
  NOT: [BallotSubscriptionWhereInput!]
}

input BallotUpdateDataInput {
  title: String
  desc: String
  candidates: UserUpdateManyWithoutCandidateForInput
  votes: VoteUpdateManyWithoutBallotInput
}

input BallotUpdateInput {
  title: String
  desc: String
  candidates: UserUpdateManyWithoutCandidateForInput
  votes: VoteUpdateManyWithoutBallotInput
}

input BallotUpdateManyDataInput {
  title: String
  desc: String
}

input BallotUpdateManyInput {
  create: [BallotCreateInput!]
  update: [BallotUpdateWithWhereUniqueNestedInput!]
  upsert: [BallotUpsertWithWhereUniqueNestedInput!]
  delete: [BallotWhereUniqueInput!]
  connect: [BallotWhereUniqueInput!]
  set: [BallotWhereUniqueInput!]
  disconnect: [BallotWhereUniqueInput!]
  deleteMany: [BallotScalarWhereInput!]
  updateMany: [BallotUpdateManyWithWhereNestedInput!]
}

input BallotUpdateManyMutationInput {
  title: String
  desc: String
}

input BallotUpdateManyWithoutCandidatesInput {
  create: [BallotCreateWithoutCandidatesInput!]
  delete: [BallotWhereUniqueInput!]
  connect: [BallotWhereUniqueInput!]
  set: [BallotWhereUniqueInput!]
  disconnect: [BallotWhereUniqueInput!]
  update: [BallotUpdateWithWhereUniqueWithoutCandidatesInput!]
  upsert: [BallotUpsertWithWhereUniqueWithoutCandidatesInput!]
  deleteMany: [BallotScalarWhereInput!]
  updateMany: [BallotUpdateManyWithWhereNestedInput!]
}

input BallotUpdateManyWithWhereNestedInput {
  where: BallotScalarWhereInput!
  data: BallotUpdateManyDataInput!
}

input BallotUpdateOneRequiredWithoutVotesInput {
  create: BallotCreateWithoutVotesInput
  update: BallotUpdateWithoutVotesDataInput
  upsert: BallotUpsertWithoutVotesInput
  connect: BallotWhereUniqueInput
}

input BallotUpdateWithoutCandidatesDataInput {
  title: String
  desc: String
  votes: VoteUpdateManyWithoutBallotInput
}

input BallotUpdateWithoutVotesDataInput {
  title: String
  desc: String
  candidates: UserUpdateManyWithoutCandidateForInput
}

input BallotUpdateWithWhereUniqueNestedInput {
  where: BallotWhereUniqueInput!
  data: BallotUpdateDataInput!
}

input BallotUpdateWithWhereUniqueWithoutCandidatesInput {
  where: BallotWhereUniqueInput!
  data: BallotUpdateWithoutCandidatesDataInput!
}

input BallotUpsertWithoutVotesInput {
  update: BallotUpdateWithoutVotesDataInput!
  create: BallotCreateWithoutVotesInput!
}

input BallotUpsertWithWhereUniqueNestedInput {
  where: BallotWhereUniqueInput!
  update: BallotUpdateDataInput!
  create: BallotCreateInput!
}

input BallotUpsertWithWhereUniqueWithoutCandidatesInput {
  where: BallotWhereUniqueInput!
  update: BallotUpdateWithoutCandidatesDataInput!
  create: BallotCreateWithoutCandidatesInput!
}

input BallotWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  candidates_every: UserWhereInput
  candidates_some: UserWhereInput
  candidates_none: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [BallotWhereInput!]
  OR: [BallotWhereInput!]
  NOT: [BallotWhereInput!]
}

input BallotWhereUniqueInput {
  id: ID
}

type Bandaid {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime!
  event: Event
  memberInvolved: User
  title: String
  description: String
}

type BandaidConnection {
  pageInfo: PageInfo!
  edges: [BandaidEdge]!
  aggregate: AggregateBandaid!
}

input BandaidCreateInput {
  id: ID
  event: EventCreateOneWithoutBandaidsInput
  memberInvolved: UserCreateOneWithoutBandaidsInput
  title: String
  description: String
}

input BandaidCreateManyWithoutEventInput {
  create: [BandaidCreateWithoutEventInput!]
  connect: [BandaidWhereUniqueInput!]
}

input BandaidCreateManyWithoutMemberInvolvedInput {
  create: [BandaidCreateWithoutMemberInvolvedInput!]
  connect: [BandaidWhereUniqueInput!]
}

input BandaidCreateWithoutEventInput {
  id: ID
  memberInvolved: UserCreateOneWithoutBandaidsInput
  title: String
  description: String
}

input BandaidCreateWithoutMemberInvolvedInput {
  id: ID
  event: EventCreateOneWithoutBandaidsInput
  title: String
  description: String
}

type BandaidEdge {
  node: Bandaid!
  cursor: String!
}

enum BandaidOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
}

type BandaidPreviousValues {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime!
  title: String
  description: String
}

input BandaidScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [BandaidScalarWhereInput!]
  OR: [BandaidScalarWhereInput!]
  NOT: [BandaidScalarWhereInput!]
}

type BandaidSubscriptionPayload {
  mutation: MutationType!
  node: Bandaid
  updatedFields: [String!]
  previousValues: BandaidPreviousValues
}

input BandaidSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BandaidWhereInput
  AND: [BandaidSubscriptionWhereInput!]
  OR: [BandaidSubscriptionWhereInput!]
  NOT: [BandaidSubscriptionWhereInput!]
}

input BandaidUpdateInput {
  event: EventUpdateOneWithoutBandaidsInput
  memberInvolved: UserUpdateOneWithoutBandaidsInput
  title: String
  description: String
}

input BandaidUpdateManyDataInput {
  title: String
  description: String
}

input BandaidUpdateManyMutationInput {
  title: String
  description: String
}

input BandaidUpdateManyWithoutEventInput {
  create: [BandaidCreateWithoutEventInput!]
  delete: [BandaidWhereUniqueInput!]
  connect: [BandaidWhereUniqueInput!]
  set: [BandaidWhereUniqueInput!]
  disconnect: [BandaidWhereUniqueInput!]
  update: [BandaidUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [BandaidUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [BandaidScalarWhereInput!]
  updateMany: [BandaidUpdateManyWithWhereNestedInput!]
}

input BandaidUpdateManyWithoutMemberInvolvedInput {
  create: [BandaidCreateWithoutMemberInvolvedInput!]
  delete: [BandaidWhereUniqueInput!]
  connect: [BandaidWhereUniqueInput!]
  set: [BandaidWhereUniqueInput!]
  disconnect: [BandaidWhereUniqueInput!]
  update: [BandaidUpdateWithWhereUniqueWithoutMemberInvolvedInput!]
  upsert: [BandaidUpsertWithWhereUniqueWithoutMemberInvolvedInput!]
  deleteMany: [BandaidScalarWhereInput!]
  updateMany: [BandaidUpdateManyWithWhereNestedInput!]
}

input BandaidUpdateManyWithWhereNestedInput {
  where: BandaidScalarWhereInput!
  data: BandaidUpdateManyDataInput!
}

input BandaidUpdateWithoutEventDataInput {
  memberInvolved: UserUpdateOneWithoutBandaidsInput
  title: String
  description: String
}

input BandaidUpdateWithoutMemberInvolvedDataInput {
  event: EventUpdateOneWithoutBandaidsInput
  title: String
  description: String
}

input BandaidUpdateWithWhereUniqueWithoutEventInput {
  where: BandaidWhereUniqueInput!
  data: BandaidUpdateWithoutEventDataInput!
}

input BandaidUpdateWithWhereUniqueWithoutMemberInvolvedInput {
  where: BandaidWhereUniqueInput!
  data: BandaidUpdateWithoutMemberInvolvedDataInput!
}

input BandaidUpsertWithWhereUniqueWithoutEventInput {
  where: BandaidWhereUniqueInput!
  update: BandaidUpdateWithoutEventDataInput!
  create: BandaidCreateWithoutEventInput!
}

input BandaidUpsertWithWhereUniqueWithoutMemberInvolvedInput {
  where: BandaidWhereUniqueInput!
  update: BandaidUpdateWithoutMemberInvolvedDataInput!
  create: BandaidCreateWithoutMemberInvolvedInput!
}

input BandaidWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  event: EventWhereInput
  memberInvolved: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [BandaidWhereInput!]
  OR: [BandaidWhereInput!]
  NOT: [BandaidWhereInput!]
}

input BandaidWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type CloudinaryImage {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  publicId: String!
  url: String
  smallUrl: String
}

type CloudinaryImageConnection {
  pageInfo: PageInfo!
  edges: [CloudinaryImageEdge]!
  aggregate: AggregateCloudinaryImage!
}

input CloudinaryImageCreateInput {
  id: ID
  publicId: String!
  url: String
  smallUrl: String
}

input CloudinaryImageCreateOneInput {
  create: CloudinaryImageCreateInput
  connect: CloudinaryImageWhereUniqueInput
}

type CloudinaryImageEdge {
  node: CloudinaryImage!
  cursor: String!
}

enum CloudinaryImageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  publicId_ASC
  publicId_DESC
  url_ASC
  url_DESC
  smallUrl_ASC
  smallUrl_DESC
}

type CloudinaryImagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  publicId: String!
  url: String
  smallUrl: String
}

type CloudinaryImageSubscriptionPayload {
  mutation: MutationType!
  node: CloudinaryImage
  updatedFields: [String!]
  previousValues: CloudinaryImagePreviousValues
}

input CloudinaryImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CloudinaryImageWhereInput
  AND: [CloudinaryImageSubscriptionWhereInput!]
  OR: [CloudinaryImageSubscriptionWhereInput!]
  NOT: [CloudinaryImageSubscriptionWhereInput!]
}

input CloudinaryImageUpdateDataInput {
  publicId: String
  url: String
  smallUrl: String
}

input CloudinaryImageUpdateInput {
  publicId: String
  url: String
  smallUrl: String
}

input CloudinaryImageUpdateManyMutationInput {
  publicId: String
  url: String
  smallUrl: String
}

input CloudinaryImageUpdateOneInput {
  create: CloudinaryImageCreateInput
  update: CloudinaryImageUpdateDataInput
  upsert: CloudinaryImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CloudinaryImageWhereUniqueInput
}

input CloudinaryImageUpsertNestedInput {
  update: CloudinaryImageUpdateDataInput!
  create: CloudinaryImageCreateInput!
}

input CloudinaryImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  publicId: String
  publicId_not: String
  publicId_in: [String!]
  publicId_not_in: [String!]
  publicId_lt: String
  publicId_lte: String
  publicId_gt: String
  publicId_gte: String
  publicId_contains: String
  publicId_not_contains: String
  publicId_starts_with: String
  publicId_not_starts_with: String
  publicId_ends_with: String
  publicId_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  smallUrl: String
  smallUrl_not: String
  smallUrl_in: [String!]
  smallUrl_not_in: [String!]
  smallUrl_lt: String
  smallUrl_lte: String
  smallUrl_gt: String
  smallUrl_gte: String
  smallUrl_contains: String
  smallUrl_not_contains: String
  smallUrl_starts_with: String
  smallUrl_not_starts_with: String
  smallUrl_ends_with: String
  smallUrl_not_ends_with: String
  AND: [CloudinaryImageWhereInput!]
  OR: [CloudinaryImageWhereInput!]
  NOT: [CloudinaryImageWhereInput!]
}

input CloudinaryImageWhereUniqueInput {
  id: ID
}

type Condition {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  report: RunReport!
  status: TrailCondition!
  notes: String
}

type ConditionConnection {
  pageInfo: PageInfo!
  edges: [ConditionEdge]!
  aggregate: AggregateCondition!
}

input ConditionCreateInput {
  id: ID
  report: RunReportCreateOneWithoutConditionInput!
  status: TrailCondition!
  notes: String
}

input ConditionCreateOneWithoutReportInput {
  create: ConditionCreateWithoutReportInput
  connect: ConditionWhereUniqueInput
}

input ConditionCreateWithoutReportInput {
  id: ID
  status: TrailCondition!
  notes: String
}

type ConditionEdge {
  node: Condition!
  cursor: String!
}

enum ConditionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
  notes_ASC
  notes_DESC
}

type ConditionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: TrailCondition!
  notes: String
}

type ConditionSubscriptionPayload {
  mutation: MutationType!
  node: Condition
  updatedFields: [String!]
  previousValues: ConditionPreviousValues
}

input ConditionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ConditionWhereInput
  AND: [ConditionSubscriptionWhereInput!]
  OR: [ConditionSubscriptionWhereInput!]
  NOT: [ConditionSubscriptionWhereInput!]
}

input ConditionUpdateInput {
  report: RunReportUpdateOneRequiredWithoutConditionInput
  status: TrailCondition
  notes: String
}

input ConditionUpdateManyMutationInput {
  status: TrailCondition
  notes: String
}

input ConditionUpdateOneWithoutReportInput {
  create: ConditionCreateWithoutReportInput
  update: ConditionUpdateWithoutReportDataInput
  upsert: ConditionUpsertWithoutReportInput
  delete: Boolean
  disconnect: Boolean
  connect: ConditionWhereUniqueInput
}

input ConditionUpdateWithoutReportDataInput {
  status: TrailCondition
  notes: String
}

input ConditionUpsertWithoutReportInput {
  update: ConditionUpdateWithoutReportDataInput!
  create: ConditionCreateWithoutReportInput!
}

input ConditionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  report: RunReportWhereInput
  status: TrailCondition
  status_not: TrailCondition
  status_in: [TrailCondition!]
  status_not_in: [TrailCondition!]
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  AND: [ConditionWhereInput!]
  OR: [ConditionWhereInput!]
  NOT: [ConditionWhereInput!]
}

input ConditionWhereUniqueInput {
  id: ID
}

type ContactInfo {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime!
  user: User
  street: String
  city: String
  state: String
  zip: String
  phone: String!
}

type ContactInfoConnection {
  pageInfo: PageInfo!
  edges: [ContactInfoEdge]!
  aggregate: AggregateContactInfo!
}

input ContactInfoCreateInput {
  id: ID
  user: UserCreateOneWithoutContactInfoInput
  street: String
  city: String
  state: String
  zip: String
  phone: String!
}

input ContactInfoCreateOneWithoutUserInput {
  create: ContactInfoCreateWithoutUserInput
  connect: ContactInfoWhereUniqueInput
}

input ContactInfoCreateWithoutUserInput {
  id: ID
  street: String
  city: String
  state: String
  zip: String
  phone: String!
}

type ContactInfoEdge {
  node: ContactInfo!
  cursor: String!
}

enum ContactInfoOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  street_ASC
  street_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  zip_ASC
  zip_DESC
  phone_ASC
  phone_DESC
}

type ContactInfoPreviousValues {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime!
  street: String
  city: String
  state: String
  zip: String
  phone: String!
}

type ContactInfoSubscriptionPayload {
  mutation: MutationType!
  node: ContactInfo
  updatedFields: [String!]
  previousValues: ContactInfoPreviousValues
}

input ContactInfoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContactInfoWhereInput
  AND: [ContactInfoSubscriptionWhereInput!]
  OR: [ContactInfoSubscriptionWhereInput!]
  NOT: [ContactInfoSubscriptionWhereInput!]
}

input ContactInfoUpdateInput {
  user: UserUpdateOneWithoutContactInfoInput
  street: String
  city: String
  state: String
  zip: String
  phone: String
}

input ContactInfoUpdateManyMutationInput {
  street: String
  city: String
  state: String
  zip: String
  phone: String
}

input ContactInfoUpdateOneWithoutUserInput {
  create: ContactInfoCreateWithoutUserInput
  update: ContactInfoUpdateWithoutUserDataInput
  upsert: ContactInfoUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: ContactInfoWhereUniqueInput
}

input ContactInfoUpdateWithoutUserDataInput {
  street: String
  city: String
  state: String
  zip: String
  phone: String
}

input ContactInfoUpsertWithoutUserInput {
  update: ContactInfoUpdateWithoutUserDataInput!
  create: ContactInfoCreateWithoutUserInput!
}

input ContactInfoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  AND: [ContactInfoWhereInput!]
  OR: [ContactInfoWhereInput!]
  NOT: [ContactInfoWhereInput!]
}

input ContactInfoWhereUniqueInput {
  id: ID
}

scalar DateTime

type Election {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  electionName: String!
  startTime: DateTime
  endTime: DateTime
  races(where: BallotWhereInput, orderBy: BallotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ballot!]
}

type ElectionConnection {
  pageInfo: PageInfo!
  edges: [ElectionEdge]!
  aggregate: AggregateElection!
}

input ElectionCreateInput {
  id: ID
  electionName: String!
  startTime: DateTime
  endTime: DateTime
  races: BallotCreateManyInput
}

type ElectionEdge {
  node: Election!
  cursor: String!
}

enum ElectionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  electionName_ASC
  electionName_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
}

type ElectionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  electionName: String!
  startTime: DateTime
  endTime: DateTime
}

type ElectionSubscriptionPayload {
  mutation: MutationType!
  node: Election
  updatedFields: [String!]
  previousValues: ElectionPreviousValues
}

input ElectionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ElectionWhereInput
  AND: [ElectionSubscriptionWhereInput!]
  OR: [ElectionSubscriptionWhereInput!]
  NOT: [ElectionSubscriptionWhereInput!]
}

input ElectionUpdateInput {
  electionName: String
  startTime: DateTime
  endTime: DateTime
  races: BallotUpdateManyInput
}

input ElectionUpdateManyMutationInput {
  electionName: String
  startTime: DateTime
  endTime: DateTime
}

input ElectionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  electionName: String
  electionName_not: String
  electionName_in: [String!]
  electionName_not_in: [String!]
  electionName_lt: String
  electionName_lte: String
  electionName_gt: String
  electionName_gte: String
  electionName_contains: String
  electionName_not_contains: String
  electionName_starts_with: String
  electionName_not_starts_with: String
  electionName_ends_with: String
  electionName_not_ends_with: String
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  races_every: BallotWhereInput
  races_some: BallotWhereInput
  races_none: BallotWhereInput
  AND: [ElectionWhereInput!]
  OR: [ElectionWhereInput!]
  NOT: [ElectionWhereInput!]
}

input ElectionWhereUniqueInput {
  id: ID
}

type Event {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: EventType!
  title: String!
  creator: User!
  description: String
  featuredImage: CloudinaryImage
  startTime: DateTime
  endTime: DateTime
  host: User
  rsvps(where: RSVPWhereInput, orderBy: RSVPOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RSVP!]
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: Trail
  bandaids(where: BandaidWhereInput, orderBy: BandaidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bandaid!]
  runReports(where: RunReportWhereInput, orderBy: RunReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunReport!]
  membersOnly: Boolean
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  id: ID
  type: EventType!
  title: String!
  creator: UserCreateOneWithoutEventsCreatedInput!
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserCreateOneWithoutEventsHostedInput
  rsvps: RSVPCreateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailCreateOneWithoutPastEventsInput
  bandaids: BandaidCreateManyWithoutEventInput
  runReports: RunReportCreateManyWithoutEventInput
  membersOnly: Boolean
}

input EventCreateManyWithoutCreatorInput {
  create: [EventCreateWithoutCreatorInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutHostInput {
  create: [EventCreateWithoutHostInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutTrailInput {
  create: [EventCreateWithoutTrailInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateOneWithoutBandaidsInput {
  create: EventCreateWithoutBandaidsInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutRsvpsInput {
  create: EventCreateWithoutRsvpsInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutRunReportsInput {
  create: EventCreateWithoutRunReportsInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutBandaidsInput {
  id: ID
  type: EventType!
  title: String!
  creator: UserCreateOneWithoutEventsCreatedInput!
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserCreateOneWithoutEventsHostedInput
  rsvps: RSVPCreateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailCreateOneWithoutPastEventsInput
  runReports: RunReportCreateManyWithoutEventInput
  membersOnly: Boolean
}

input EventCreateWithoutCreatorInput {
  id: ID
  type: EventType!
  title: String!
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserCreateOneWithoutEventsHostedInput
  rsvps: RSVPCreateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailCreateOneWithoutPastEventsInput
  bandaids: BandaidCreateManyWithoutEventInput
  runReports: RunReportCreateManyWithoutEventInput
  membersOnly: Boolean
}

input EventCreateWithoutHostInput {
  id: ID
  type: EventType!
  title: String!
  creator: UserCreateOneWithoutEventsCreatedInput!
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  startTime: DateTime
  endTime: DateTime
  rsvps: RSVPCreateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailCreateOneWithoutPastEventsInput
  bandaids: BandaidCreateManyWithoutEventInput
  runReports: RunReportCreateManyWithoutEventInput
  membersOnly: Boolean
}

input EventCreateWithoutRsvpsInput {
  id: ID
  type: EventType!
  title: String!
  creator: UserCreateOneWithoutEventsCreatedInput!
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserCreateOneWithoutEventsHostedInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailCreateOneWithoutPastEventsInput
  bandaids: BandaidCreateManyWithoutEventInput
  runReports: RunReportCreateManyWithoutEventInput
  membersOnly: Boolean
}

input EventCreateWithoutRunReportsInput {
  id: ID
  type: EventType!
  title: String!
  creator: UserCreateOneWithoutEventsCreatedInput!
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserCreateOneWithoutEventsHostedInput
  rsvps: RSVPCreateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailCreateOneWithoutPastEventsInput
  bandaids: BandaidCreateManyWithoutEventInput
  membersOnly: Boolean
}

input EventCreateWithoutTrailInput {
  id: ID
  type: EventType!
  title: String!
  creator: UserCreateOneWithoutEventsCreatedInput!
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserCreateOneWithoutEventsHostedInput
  rsvps: RSVPCreateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  bandaids: BandaidCreateManyWithoutEventInput
  runReports: RunReportCreateManyWithoutEventInput
  membersOnly: Boolean
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  address_ASC
  address_DESC
  trailDifficulty_ASC
  trailDifficulty_DESC
  trailNotes_ASC
  trailNotes_DESC
  rallyAddress_ASC
  rallyAddress_DESC
  rallyTime_ASC
  rallyTime_DESC
  membersOnly_ASC
  membersOnly_DESC
}

type EventPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: EventType!
  title: String!
  description: String
  startTime: DateTime
  endTime: DateTime
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  membersOnly: Boolean
}

input EventScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  trailDifficulty: TrailDifficulty
  trailDifficulty_not: TrailDifficulty
  trailDifficulty_in: [TrailDifficulty!]
  trailDifficulty_not_in: [TrailDifficulty!]
  trailNotes: String
  trailNotes_not: String
  trailNotes_in: [String!]
  trailNotes_not_in: [String!]
  trailNotes_lt: String
  trailNotes_lte: String
  trailNotes_gt: String
  trailNotes_gte: String
  trailNotes_contains: String
  trailNotes_not_contains: String
  trailNotes_starts_with: String
  trailNotes_not_starts_with: String
  trailNotes_ends_with: String
  trailNotes_not_ends_with: String
  rallyAddress: String
  rallyAddress_not: String
  rallyAddress_in: [String!]
  rallyAddress_not_in: [String!]
  rallyAddress_lt: String
  rallyAddress_lte: String
  rallyAddress_gt: String
  rallyAddress_gte: String
  rallyAddress_contains: String
  rallyAddress_not_contains: String
  rallyAddress_starts_with: String
  rallyAddress_not_starts_with: String
  rallyAddress_ends_with: String
  rallyAddress_not_ends_with: String
  rallyTime: DateTime
  rallyTime_not: DateTime
  rallyTime_in: [DateTime!]
  rallyTime_not_in: [DateTime!]
  rallyTime_lt: DateTime
  rallyTime_lte: DateTime
  rallyTime_gt: DateTime
  rallyTime_gte: DateTime
  membersOnly: Boolean
  membersOnly_not: Boolean
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

enum EventType {
  RUN
  COLLECTION
  FUNDRAISING
  MEETING
  CLINIC
  SOCIAL
}

input EventUpdateInput {
  type: EventType
  title: String
  creator: UserUpdateOneRequiredWithoutEventsCreatedInput
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserUpdateOneWithoutEventsHostedInput
  rsvps: RSVPUpdateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailUpdateOneWithoutPastEventsInput
  bandaids: BandaidUpdateManyWithoutEventInput
  runReports: RunReportUpdateManyWithoutEventInput
  membersOnly: Boolean
}

input EventUpdateManyDataInput {
  type: EventType
  title: String
  description: String
  startTime: DateTime
  endTime: DateTime
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  membersOnly: Boolean
}

input EventUpdateManyMutationInput {
  type: EventType
  title: String
  description: String
  startTime: DateTime
  endTime: DateTime
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  membersOnly: Boolean
}

input EventUpdateManyWithoutCreatorInput {
  create: [EventCreateWithoutCreatorInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutCreatorInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithoutHostInput {
  create: [EventCreateWithoutHostInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutHostInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutHostInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithoutTrailInput {
  create: [EventCreateWithoutTrailInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutTrailInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutTrailInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateOneRequiredWithoutRsvpsInput {
  create: EventCreateWithoutRsvpsInput
  update: EventUpdateWithoutRsvpsDataInput
  upsert: EventUpsertWithoutRsvpsInput
  connect: EventWhereUniqueInput
}

input EventUpdateOneWithoutBandaidsInput {
  create: EventCreateWithoutBandaidsInput
  update: EventUpdateWithoutBandaidsDataInput
  upsert: EventUpsertWithoutBandaidsInput
  delete: Boolean
  disconnect: Boolean
  connect: EventWhereUniqueInput
}

input EventUpdateOneWithoutRunReportsInput {
  create: EventCreateWithoutRunReportsInput
  update: EventUpdateWithoutRunReportsDataInput
  upsert: EventUpsertWithoutRunReportsInput
  delete: Boolean
  disconnect: Boolean
  connect: EventWhereUniqueInput
}

input EventUpdateWithoutBandaidsDataInput {
  type: EventType
  title: String
  creator: UserUpdateOneRequiredWithoutEventsCreatedInput
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserUpdateOneWithoutEventsHostedInput
  rsvps: RSVPUpdateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailUpdateOneWithoutPastEventsInput
  runReports: RunReportUpdateManyWithoutEventInput
  membersOnly: Boolean
}

input EventUpdateWithoutCreatorDataInput {
  type: EventType
  title: String
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserUpdateOneWithoutEventsHostedInput
  rsvps: RSVPUpdateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailUpdateOneWithoutPastEventsInput
  bandaids: BandaidUpdateManyWithoutEventInput
  runReports: RunReportUpdateManyWithoutEventInput
  membersOnly: Boolean
}

input EventUpdateWithoutHostDataInput {
  type: EventType
  title: String
  creator: UserUpdateOneRequiredWithoutEventsCreatedInput
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  startTime: DateTime
  endTime: DateTime
  rsvps: RSVPUpdateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailUpdateOneWithoutPastEventsInput
  bandaids: BandaidUpdateManyWithoutEventInput
  runReports: RunReportUpdateManyWithoutEventInput
  membersOnly: Boolean
}

input EventUpdateWithoutRsvpsDataInput {
  type: EventType
  title: String
  creator: UserUpdateOneRequiredWithoutEventsCreatedInput
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserUpdateOneWithoutEventsHostedInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailUpdateOneWithoutPastEventsInput
  bandaids: BandaidUpdateManyWithoutEventInput
  runReports: RunReportUpdateManyWithoutEventInput
  membersOnly: Boolean
}

input EventUpdateWithoutRunReportsDataInput {
  type: EventType
  title: String
  creator: UserUpdateOneRequiredWithoutEventsCreatedInput
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserUpdateOneWithoutEventsHostedInput
  rsvps: RSVPUpdateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  trail: TrailUpdateOneWithoutPastEventsInput
  bandaids: BandaidUpdateManyWithoutEventInput
  membersOnly: Boolean
}

input EventUpdateWithoutTrailDataInput {
  type: EventType
  title: String
  creator: UserUpdateOneRequiredWithoutEventsCreatedInput
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  startTime: DateTime
  endTime: DateTime
  host: UserUpdateOneWithoutEventsHostedInput
  rsvps: RSVPUpdateManyWithoutEventInput
  address: String
  trailDifficulty: TrailDifficulty
  trailNotes: String
  rallyAddress: String
  rallyTime: DateTime
  bandaids: BandaidUpdateManyWithoutEventInput
  runReports: RunReportUpdateManyWithoutEventInput
  membersOnly: Boolean
}

input EventUpdateWithWhereUniqueWithoutCreatorInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutCreatorDataInput!
}

input EventUpdateWithWhereUniqueWithoutHostInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutHostDataInput!
}

input EventUpdateWithWhereUniqueWithoutTrailInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutTrailDataInput!
}

input EventUpsertWithoutBandaidsInput {
  update: EventUpdateWithoutBandaidsDataInput!
  create: EventCreateWithoutBandaidsInput!
}

input EventUpsertWithoutRsvpsInput {
  update: EventUpdateWithoutRsvpsDataInput!
  create: EventCreateWithoutRsvpsInput!
}

input EventUpsertWithoutRunReportsInput {
  update: EventUpdateWithoutRunReportsDataInput!
  create: EventCreateWithoutRunReportsInput!
}

input EventUpsertWithWhereUniqueWithoutCreatorInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutCreatorDataInput!
  create: EventCreateWithoutCreatorInput!
}

input EventUpsertWithWhereUniqueWithoutHostInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutHostDataInput!
  create: EventCreateWithoutHostInput!
}

input EventUpsertWithWhereUniqueWithoutTrailInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutTrailDataInput!
  create: EventCreateWithoutTrailInput!
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  creator: UserWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  featuredImage: CloudinaryImageWhereInput
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  host: UserWhereInput
  rsvps_every: RSVPWhereInput
  rsvps_some: RSVPWhereInput
  rsvps_none: RSVPWhereInput
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  trailDifficulty: TrailDifficulty
  trailDifficulty_not: TrailDifficulty
  trailDifficulty_in: [TrailDifficulty!]
  trailDifficulty_not_in: [TrailDifficulty!]
  trailNotes: String
  trailNotes_not: String
  trailNotes_in: [String!]
  trailNotes_not_in: [String!]
  trailNotes_lt: String
  trailNotes_lte: String
  trailNotes_gt: String
  trailNotes_gte: String
  trailNotes_contains: String
  trailNotes_not_contains: String
  trailNotes_starts_with: String
  trailNotes_not_starts_with: String
  trailNotes_ends_with: String
  trailNotes_not_ends_with: String
  rallyAddress: String
  rallyAddress_not: String
  rallyAddress_in: [String!]
  rallyAddress_not_in: [String!]
  rallyAddress_lt: String
  rallyAddress_lte: String
  rallyAddress_gt: String
  rallyAddress_gte: String
  rallyAddress_contains: String
  rallyAddress_not_contains: String
  rallyAddress_starts_with: String
  rallyAddress_not_starts_with: String
  rallyAddress_ends_with: String
  rallyAddress_not_ends_with: String
  rallyTime: DateTime
  rallyTime_not: DateTime
  rallyTime_in: [DateTime!]
  rallyTime_not_in: [DateTime!]
  rallyTime_lt: DateTime
  rallyTime_lte: DateTime
  rallyTime_gt: DateTime
  rallyTime_gte: DateTime
  trail: TrailWhereInput
  bandaids_every: BandaidWhereInput
  bandaids_some: BandaidWhereInput
  bandaids_none: BandaidWhereInput
  runReports_every: RunReportWhereInput
  runReports_some: RunReportWhereInput
  runReports_none: RunReportWhereInput
  membersOnly: Boolean
  membersOnly_not: Boolean
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

enum Gender {
  MALE
  FEMALE
  OTHER
  UNDISCLOSED
}

scalar Long

type MembershipLogItem {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  time: DateTime!
  message: String!
  messageCode: MembershipMessageCode!
  user: User!
  logger: User
}

type MembershipLogItemConnection {
  pageInfo: PageInfo!
  edges: [MembershipLogItemEdge]!
  aggregate: AggregateMembershipLogItem!
}

input MembershipLogItemCreateInput {
  id: ID
  time: DateTime!
  message: String!
  messageCode: MembershipMessageCode!
  user: UserCreateOneWithoutMembershipLogInput!
  logger: UserCreateOneWithoutMembershipLogContributionsInput
}

input MembershipLogItemCreateManyWithoutLoggerInput {
  create: [MembershipLogItemCreateWithoutLoggerInput!]
  connect: [MembershipLogItemWhereUniqueInput!]
}

input MembershipLogItemCreateManyWithoutUserInput {
  create: [MembershipLogItemCreateWithoutUserInput!]
  connect: [MembershipLogItemWhereUniqueInput!]
}

input MembershipLogItemCreateWithoutLoggerInput {
  id: ID
  time: DateTime!
  message: String!
  messageCode: MembershipMessageCode!
  user: UserCreateOneWithoutMembershipLogInput!
}

input MembershipLogItemCreateWithoutUserInput {
  id: ID
  time: DateTime!
  message: String!
  messageCode: MembershipMessageCode!
  logger: UserCreateOneWithoutMembershipLogContributionsInput
}

type MembershipLogItemEdge {
  node: MembershipLogItem!
  cursor: String!
}

enum MembershipLogItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  time_ASC
  time_DESC
  message_ASC
  message_DESC
  messageCode_ASC
  messageCode_DESC
}

type MembershipLogItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  time: DateTime!
  message: String!
  messageCode: MembershipMessageCode!
}

input MembershipLogItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  messageCode: MembershipMessageCode
  messageCode_not: MembershipMessageCode
  messageCode_in: [MembershipMessageCode!]
  messageCode_not_in: [MembershipMessageCode!]
  AND: [MembershipLogItemScalarWhereInput!]
  OR: [MembershipLogItemScalarWhereInput!]
  NOT: [MembershipLogItemScalarWhereInput!]
}

type MembershipLogItemSubscriptionPayload {
  mutation: MutationType!
  node: MembershipLogItem
  updatedFields: [String!]
  previousValues: MembershipLogItemPreviousValues
}

input MembershipLogItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MembershipLogItemWhereInput
  AND: [MembershipLogItemSubscriptionWhereInput!]
  OR: [MembershipLogItemSubscriptionWhereInput!]
  NOT: [MembershipLogItemSubscriptionWhereInput!]
}

input MembershipLogItemUpdateInput {
  time: DateTime
  message: String
  messageCode: MembershipMessageCode
  user: UserUpdateOneRequiredWithoutMembershipLogInput
  logger: UserUpdateOneWithoutMembershipLogContributionsInput
}

input MembershipLogItemUpdateManyDataInput {
  time: DateTime
  message: String
  messageCode: MembershipMessageCode
}

input MembershipLogItemUpdateManyMutationInput {
  time: DateTime
  message: String
  messageCode: MembershipMessageCode
}

input MembershipLogItemUpdateManyWithoutLoggerInput {
  create: [MembershipLogItemCreateWithoutLoggerInput!]
  delete: [MembershipLogItemWhereUniqueInput!]
  connect: [MembershipLogItemWhereUniqueInput!]
  set: [MembershipLogItemWhereUniqueInput!]
  disconnect: [MembershipLogItemWhereUniqueInput!]
  update: [MembershipLogItemUpdateWithWhereUniqueWithoutLoggerInput!]
  upsert: [MembershipLogItemUpsertWithWhereUniqueWithoutLoggerInput!]
  deleteMany: [MembershipLogItemScalarWhereInput!]
  updateMany: [MembershipLogItemUpdateManyWithWhereNestedInput!]
}

input MembershipLogItemUpdateManyWithoutUserInput {
  create: [MembershipLogItemCreateWithoutUserInput!]
  delete: [MembershipLogItemWhereUniqueInput!]
  connect: [MembershipLogItemWhereUniqueInput!]
  set: [MembershipLogItemWhereUniqueInput!]
  disconnect: [MembershipLogItemWhereUniqueInput!]
  update: [MembershipLogItemUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [MembershipLogItemUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [MembershipLogItemScalarWhereInput!]
  updateMany: [MembershipLogItemUpdateManyWithWhereNestedInput!]
}

input MembershipLogItemUpdateManyWithWhereNestedInput {
  where: MembershipLogItemScalarWhereInput!
  data: MembershipLogItemUpdateManyDataInput!
}

input MembershipLogItemUpdateWithoutLoggerDataInput {
  time: DateTime
  message: String
  messageCode: MembershipMessageCode
  user: UserUpdateOneRequiredWithoutMembershipLogInput
}

input MembershipLogItemUpdateWithoutUserDataInput {
  time: DateTime
  message: String
  messageCode: MembershipMessageCode
  logger: UserUpdateOneWithoutMembershipLogContributionsInput
}

input MembershipLogItemUpdateWithWhereUniqueWithoutLoggerInput {
  where: MembershipLogItemWhereUniqueInput!
  data: MembershipLogItemUpdateWithoutLoggerDataInput!
}

input MembershipLogItemUpdateWithWhereUniqueWithoutUserInput {
  where: MembershipLogItemWhereUniqueInput!
  data: MembershipLogItemUpdateWithoutUserDataInput!
}

input MembershipLogItemUpsertWithWhereUniqueWithoutLoggerInput {
  where: MembershipLogItemWhereUniqueInput!
  update: MembershipLogItemUpdateWithoutLoggerDataInput!
  create: MembershipLogItemCreateWithoutLoggerInput!
}

input MembershipLogItemUpsertWithWhereUniqueWithoutUserInput {
  where: MembershipLogItemWhereUniqueInput!
  update: MembershipLogItemUpdateWithoutUserDataInput!
  create: MembershipLogItemCreateWithoutUserInput!
}

input MembershipLogItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  messageCode: MembershipMessageCode
  messageCode_not: MembershipMessageCode
  messageCode_in: [MembershipMessageCode!]
  messageCode_not_in: [MembershipMessageCode!]
  user: UserWhereInput
  logger: UserWhereInput
  AND: [MembershipLogItemWhereInput!]
  OR: [MembershipLogItemWhereInput!]
  NOT: [MembershipLogItemWhereInput!]
}

input MembershipLogItemWhereUniqueInput {
  id: ID
}

enum MembershipMessageCode {
  ACCOUNT_CREATED
  ACCOUNT_UNLOCKED
  ACCOUNT_CHANGED
  ACCOUNT_REJECTED
  DUES_PAID
  OFFICE_ADDED
  OFFICE_REMOVED
  TITLE_ADDED
  TITLE_REMOVED
  MEMBERSHIP_ELIGIBLE
  MEMBERSHIP_GRANTED
  GUEST_RESTRICTED
}

type Mutation {
  createActivityLogItem(data: ActivityLogItemCreateInput!): ActivityLogItem!
  updateActivityLogItem(data: ActivityLogItemUpdateInput!, where: ActivityLogItemWhereUniqueInput!): ActivityLogItem
  updateManyActivityLogItems(data: ActivityLogItemUpdateManyMutationInput!, where: ActivityLogItemWhereInput): BatchPayload!
  upsertActivityLogItem(where: ActivityLogItemWhereUniqueInput!, create: ActivityLogItemCreateInput!, update: ActivityLogItemUpdateInput!): ActivityLogItem!
  deleteActivityLogItem(where: ActivityLogItemWhereUniqueInput!): ActivityLogItem
  deleteManyActivityLogItems(where: ActivityLogItemWhereInput): BatchPayload!
  createBallot(data: BallotCreateInput!): Ballot!
  updateBallot(data: BallotUpdateInput!, where: BallotWhereUniqueInput!): Ballot
  updateManyBallots(data: BallotUpdateManyMutationInput!, where: BallotWhereInput): BatchPayload!
  upsertBallot(where: BallotWhereUniqueInput!, create: BallotCreateInput!, update: BallotUpdateInput!): Ballot!
  deleteBallot(where: BallotWhereUniqueInput!): Ballot
  deleteManyBallots(where: BallotWhereInput): BatchPayload!
  createBandaid(data: BandaidCreateInput!): Bandaid!
  updateBandaid(data: BandaidUpdateInput!, where: BandaidWhereUniqueInput!): Bandaid
  updateManyBandaids(data: BandaidUpdateManyMutationInput!, where: BandaidWhereInput): BatchPayload!
  upsertBandaid(where: BandaidWhereUniqueInput!, create: BandaidCreateInput!, update: BandaidUpdateInput!): Bandaid!
  deleteBandaid(where: BandaidWhereUniqueInput!): Bandaid
  deleteManyBandaids(where: BandaidWhereInput): BatchPayload!
  createCloudinaryImage(data: CloudinaryImageCreateInput!): CloudinaryImage!
  updateCloudinaryImage(data: CloudinaryImageUpdateInput!, where: CloudinaryImageWhereUniqueInput!): CloudinaryImage
  updateManyCloudinaryImages(data: CloudinaryImageUpdateManyMutationInput!, where: CloudinaryImageWhereInput): BatchPayload!
  upsertCloudinaryImage(where: CloudinaryImageWhereUniqueInput!, create: CloudinaryImageCreateInput!, update: CloudinaryImageUpdateInput!): CloudinaryImage!
  deleteCloudinaryImage(where: CloudinaryImageWhereUniqueInput!): CloudinaryImage
  deleteManyCloudinaryImages(where: CloudinaryImageWhereInput): BatchPayload!
  createCondition(data: ConditionCreateInput!): Condition!
  updateCondition(data: ConditionUpdateInput!, where: ConditionWhereUniqueInput!): Condition
  updateManyConditions(data: ConditionUpdateManyMutationInput!, where: ConditionWhereInput): BatchPayload!
  upsertCondition(where: ConditionWhereUniqueInput!, create: ConditionCreateInput!, update: ConditionUpdateInput!): Condition!
  deleteCondition(where: ConditionWhereUniqueInput!): Condition
  deleteManyConditions(where: ConditionWhereInput): BatchPayload!
  createContactInfo(data: ContactInfoCreateInput!): ContactInfo!
  updateContactInfo(data: ContactInfoUpdateInput!, where: ContactInfoWhereUniqueInput!): ContactInfo
  updateManyContactInfoes(data: ContactInfoUpdateManyMutationInput!, where: ContactInfoWhereInput): BatchPayload!
  upsertContactInfo(where: ContactInfoWhereUniqueInput!, create: ContactInfoCreateInput!, update: ContactInfoUpdateInput!): ContactInfo!
  deleteContactInfo(where: ContactInfoWhereUniqueInput!): ContactInfo
  deleteManyContactInfoes(where: ContactInfoWhereInput): BatchPayload!
  createElection(data: ElectionCreateInput!): Election!
  updateElection(data: ElectionUpdateInput!, where: ElectionWhereUniqueInput!): Election
  updateManyElections(data: ElectionUpdateManyMutationInput!, where: ElectionWhereInput): BatchPayload!
  upsertElection(where: ElectionWhereUniqueInput!, create: ElectionCreateInput!, update: ElectionUpdateInput!): Election!
  deleteElection(where: ElectionWhereUniqueInput!): Election
  deleteManyElections(where: ElectionWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createMembershipLogItem(data: MembershipLogItemCreateInput!): MembershipLogItem!
  updateMembershipLogItem(data: MembershipLogItemUpdateInput!, where: MembershipLogItemWhereUniqueInput!): MembershipLogItem
  updateManyMembershipLogItems(data: MembershipLogItemUpdateManyMutationInput!, where: MembershipLogItemWhereInput): BatchPayload!
  upsertMembershipLogItem(where: MembershipLogItemWhereUniqueInput!, create: MembershipLogItemCreateInput!, update: MembershipLogItemUpdateInput!): MembershipLogItem!
  deleteMembershipLogItem(where: MembershipLogItemWhereUniqueInput!): MembershipLogItem
  deleteManyMembershipLogItems(where: MembershipLogItemWhereInput): BatchPayload!
  createPreference(data: PreferenceCreateInput!): Preference!
  updatePreference(data: PreferenceUpdateInput!, where: PreferenceWhereUniqueInput!): Preference
  updateManyPreferences(data: PreferenceUpdateManyMutationInput!, where: PreferenceWhereInput): BatchPayload!
  upsertPreference(where: PreferenceWhereUniqueInput!, create: PreferenceCreateInput!, update: PreferenceUpdateInput!): Preference!
  deletePreference(where: PreferenceWhereUniqueInput!): Preference
  deleteManyPreferences(where: PreferenceWhereInput): BatchPayload!
  createRSVP(data: RSVPCreateInput!): RSVP!
  updateRSVP(data: RSVPUpdateInput!, where: RSVPWhereUniqueInput!): RSVP
  updateManyRSVPs(data: RSVPUpdateManyMutationInput!, where: RSVPWhereInput): BatchPayload!
  upsertRSVP(where: RSVPWhereUniqueInput!, create: RSVPCreateInput!, update: RSVPUpdateInput!): RSVP!
  deleteRSVP(where: RSVPWhereUniqueInput!): RSVP
  deleteManyRSVPs(where: RSVPWhereInput): BatchPayload!
  createRegistration(data: RegistrationCreateInput!): Registration!
  updateRegistration(data: RegistrationUpdateInput!, where: RegistrationWhereUniqueInput!): Registration
  updateManyRegistrations(data: RegistrationUpdateManyMutationInput!, where: RegistrationWhereInput): BatchPayload!
  upsertRegistration(where: RegistrationWhereUniqueInput!, create: RegistrationCreateInput!, update: RegistrationUpdateInput!): Registration!
  deleteRegistration(where: RegistrationWhereUniqueInput!): Registration
  deleteManyRegistrations(where: RegistrationWhereInput): BatchPayload!
  createRigImage(data: RigImageCreateInput!): RigImage!
  updateRigImage(data: RigImageUpdateInput!, where: RigImageWhereUniqueInput!): RigImage
  upsertRigImage(where: RigImageWhereUniqueInput!, create: RigImageCreateInput!, update: RigImageUpdateInput!): RigImage!
  deleteRigImage(where: RigImageWhereUniqueInput!): RigImage
  deleteManyRigImages(where: RigImageWhereInput): BatchPayload!
  createRunReport(data: RunReportCreateInput!): RunReport!
  updateRunReport(data: RunReportUpdateInput!, where: RunReportWhereUniqueInput!): RunReport
  updateManyRunReports(data: RunReportUpdateManyMutationInput!, where: RunReportWhereInput): BatchPayload!
  upsertRunReport(where: RunReportWhereUniqueInput!, create: RunReportCreateInput!, update: RunReportUpdateInput!): RunReport!
  deleteRunReport(where: RunReportWhereUniqueInput!): RunReport
  deleteManyRunReports(where: RunReportWhereInput): BatchPayload!
  createTrail(data: TrailCreateInput!): Trail!
  updateTrail(data: TrailUpdateInput!, where: TrailWhereUniqueInput!): Trail
  updateManyTrails(data: TrailUpdateManyMutationInput!, where: TrailWhereInput): BatchPayload!
  upsertTrail(where: TrailWhereUniqueInput!, create: TrailCreateInput!, update: TrailUpdateInput!): Trail!
  deleteTrail(where: TrailWhereUniqueInput!): Trail
  deleteManyTrails(where: TrailWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserMeta(data: UserMetaCreateInput!): UserMeta!
  updateUserMeta(data: UserMetaUpdateInput!, where: UserMetaWhereUniqueInput!): UserMeta
  updateManyUserMetas(data: UserMetaUpdateManyMutationInput!, where: UserMetaWhereInput): BatchPayload!
  upsertUserMeta(where: UserMetaWhereUniqueInput!, create: UserMetaCreateInput!, update: UserMetaUpdateInput!): UserMeta!
  deleteUserMeta(where: UserMetaWhereUniqueInput!): UserMeta
  deleteManyUserMetas(where: UserMetaWhereInput): BatchPayload!
  createVehicle(data: VehicleCreateInput!): Vehicle!
  updateVehicle(data: VehicleUpdateInput!, where: VehicleWhereUniqueInput!): Vehicle
  updateManyVehicles(data: VehicleUpdateManyMutationInput!, where: VehicleWhereInput): BatchPayload!
  upsertVehicle(where: VehicleWhereUniqueInput!, create: VehicleCreateInput!, update: VehicleUpdateInput!): Vehicle!
  deleteVehicle(where: VehicleWhereUniqueInput!): Vehicle
  deleteManyVehicles(where: VehicleWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

enum Office {
  PRESIDENT
  VICE_PRESIDENT
  SECRETARY
  TREASURER
}

enum OutfitLevel {
  MODIFIED
  STOCK
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Preference {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime!
  user: User
  emergencyContactName: String
  emergencyContactPhone: String
  photoPermissions: Boolean
  showPhoneNumber: Boolean
}

type PreferenceConnection {
  pageInfo: PageInfo!
  edges: [PreferenceEdge]!
  aggregate: AggregatePreference!
}

input PreferenceCreateInput {
  id: ID
  user: UserCreateOneWithoutPreferencesInput
  emergencyContactName: String
  emergencyContactPhone: String
  photoPermissions: Boolean
  showPhoneNumber: Boolean
}

input PreferenceCreateOneWithoutUserInput {
  create: PreferenceCreateWithoutUserInput
  connect: PreferenceWhereUniqueInput
}

input PreferenceCreateWithoutUserInput {
  id: ID
  emergencyContactName: String
  emergencyContactPhone: String
  photoPermissions: Boolean
  showPhoneNumber: Boolean
}

type PreferenceEdge {
  node: Preference!
  cursor: String!
}

enum PreferenceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  emergencyContactName_ASC
  emergencyContactName_DESC
  emergencyContactPhone_ASC
  emergencyContactPhone_DESC
  photoPermissions_ASC
  photoPermissions_DESC
  showPhoneNumber_ASC
  showPhoneNumber_DESC
}

type PreferencePreviousValues {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime!
  emergencyContactName: String
  emergencyContactPhone: String
  photoPermissions: Boolean
  showPhoneNumber: Boolean
}

type PreferenceSubscriptionPayload {
  mutation: MutationType!
  node: Preference
  updatedFields: [String!]
  previousValues: PreferencePreviousValues
}

input PreferenceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PreferenceWhereInput
  AND: [PreferenceSubscriptionWhereInput!]
  OR: [PreferenceSubscriptionWhereInput!]
  NOT: [PreferenceSubscriptionWhereInput!]
}

input PreferenceUpdateInput {
  user: UserUpdateOneWithoutPreferencesInput
  emergencyContactName: String
  emergencyContactPhone: String
  photoPermissions: Boolean
  showPhoneNumber: Boolean
}

input PreferenceUpdateManyMutationInput {
  emergencyContactName: String
  emergencyContactPhone: String
  photoPermissions: Boolean
  showPhoneNumber: Boolean
}

input PreferenceUpdateOneWithoutUserInput {
  create: PreferenceCreateWithoutUserInput
  update: PreferenceUpdateWithoutUserDataInput
  upsert: PreferenceUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: PreferenceWhereUniqueInput
}

input PreferenceUpdateWithoutUserDataInput {
  emergencyContactName: String
  emergencyContactPhone: String
  photoPermissions: Boolean
  showPhoneNumber: Boolean
}

input PreferenceUpsertWithoutUserInput {
  update: PreferenceUpdateWithoutUserDataInput!
  create: PreferenceCreateWithoutUserInput!
}

input PreferenceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  emergencyContactName: String
  emergencyContactName_not: String
  emergencyContactName_in: [String!]
  emergencyContactName_not_in: [String!]
  emergencyContactName_lt: String
  emergencyContactName_lte: String
  emergencyContactName_gt: String
  emergencyContactName_gte: String
  emergencyContactName_contains: String
  emergencyContactName_not_contains: String
  emergencyContactName_starts_with: String
  emergencyContactName_not_starts_with: String
  emergencyContactName_ends_with: String
  emergencyContactName_not_ends_with: String
  emergencyContactPhone: String
  emergencyContactPhone_not: String
  emergencyContactPhone_in: [String!]
  emergencyContactPhone_not_in: [String!]
  emergencyContactPhone_lt: String
  emergencyContactPhone_lte: String
  emergencyContactPhone_gt: String
  emergencyContactPhone_gte: String
  emergencyContactPhone_contains: String
  emergencyContactPhone_not_contains: String
  emergencyContactPhone_starts_with: String
  emergencyContactPhone_not_starts_with: String
  emergencyContactPhone_ends_with: String
  emergencyContactPhone_not_ends_with: String
  photoPermissions: Boolean
  photoPermissions_not: Boolean
  showPhoneNumber: Boolean
  showPhoneNumber_not: Boolean
  AND: [PreferenceWhereInput!]
  OR: [PreferenceWhereInput!]
  NOT: [PreferenceWhereInput!]
}

input PreferenceWhereUniqueInput {
  id: ID
}

type Query {
  activityLogItem(where: ActivityLogItemWhereUniqueInput!): ActivityLogItem
  activityLogItems(where: ActivityLogItemWhereInput, orderBy: ActivityLogItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityLogItem]!
  activityLogItemsConnection(where: ActivityLogItemWhereInput, orderBy: ActivityLogItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityLogItemConnection!
  ballot(where: BallotWhereUniqueInput!): Ballot
  ballots(where: BallotWhereInput, orderBy: BallotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ballot]!
  ballotsConnection(where: BallotWhereInput, orderBy: BallotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BallotConnection!
  bandaid(where: BandaidWhereUniqueInput!): Bandaid
  bandaids(where: BandaidWhereInput, orderBy: BandaidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bandaid]!
  bandaidsConnection(where: BandaidWhereInput, orderBy: BandaidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BandaidConnection!
  cloudinaryImage(where: CloudinaryImageWhereUniqueInput!): CloudinaryImage
  cloudinaryImages(where: CloudinaryImageWhereInput, orderBy: CloudinaryImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CloudinaryImage]!
  cloudinaryImagesConnection(where: CloudinaryImageWhereInput, orderBy: CloudinaryImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CloudinaryImageConnection!
  condition(where: ConditionWhereUniqueInput!): Condition
  conditions(where: ConditionWhereInput, orderBy: ConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Condition]!
  conditionsConnection(where: ConditionWhereInput, orderBy: ConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConditionConnection!
  contactInfo(where: ContactInfoWhereUniqueInput!): ContactInfo
  contactInfoes(where: ContactInfoWhereInput, orderBy: ContactInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactInfo]!
  contactInfoesConnection(where: ContactInfoWhereInput, orderBy: ContactInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactInfoConnection!
  election(where: ElectionWhereUniqueInput!): Election
  elections(where: ElectionWhereInput, orderBy: ElectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Election]!
  electionsConnection(where: ElectionWhereInput, orderBy: ElectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ElectionConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  membershipLogItem(where: MembershipLogItemWhereUniqueInput!): MembershipLogItem
  membershipLogItems(where: MembershipLogItemWhereInput, orderBy: MembershipLogItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MembershipLogItem]!
  membershipLogItemsConnection(where: MembershipLogItemWhereInput, orderBy: MembershipLogItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MembershipLogItemConnection!
  preference(where: PreferenceWhereUniqueInput!): Preference
  preferences(where: PreferenceWhereInput, orderBy: PreferenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Preference]!
  preferencesConnection(where: PreferenceWhereInput, orderBy: PreferenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PreferenceConnection!
  rSVP(where: RSVPWhereUniqueInput!): RSVP
  rSVPs(where: RSVPWhereInput, orderBy: RSVPOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RSVP]!
  rSVPsConnection(where: RSVPWhereInput, orderBy: RSVPOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RSVPConnection!
  registration(where: RegistrationWhereUniqueInput!): Registration
  registrations(where: RegistrationWhereInput, orderBy: RegistrationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Registration]!
  registrationsConnection(where: RegistrationWhereInput, orderBy: RegistrationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegistrationConnection!
  rigImage(where: RigImageWhereUniqueInput!): RigImage
  rigImages(where: RigImageWhereInput, orderBy: RigImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RigImage]!
  rigImagesConnection(where: RigImageWhereInput, orderBy: RigImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RigImageConnection!
  runReport(where: RunReportWhereUniqueInput!): RunReport
  runReports(where: RunReportWhereInput, orderBy: RunReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunReport]!
  runReportsConnection(where: RunReportWhereInput, orderBy: RunReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RunReportConnection!
  trail(where: TrailWhereUniqueInput!): Trail
  trails(where: TrailWhereInput, orderBy: TrailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trail]!
  trailsConnection(where: TrailWhereInput, orderBy: TrailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TrailConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userMeta(where: UserMetaWhereUniqueInput!): UserMeta
  userMetas(where: UserMetaWhereInput, orderBy: UserMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserMeta]!
  userMetasConnection(where: UserMetaWhereInput, orderBy: UserMetaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserMetaConnection!
  vehicle(where: VehicleWhereUniqueInput!): Vehicle
  vehicles(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vehicle]!
  vehiclesConnection(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VehicleConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Registration {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  email: String!
  source: String!
  token: String!
  tokenExpiry: Float!
}

type RegistrationConnection {
  pageInfo: PageInfo!
  edges: [RegistrationEdge]!
  aggregate: AggregateRegistration!
}

input RegistrationCreateInput {
  id: ID
  firstName: String
  lastName: String
  email: String!
  source: String!
  token: String!
  tokenExpiry: Float!
}

type RegistrationEdge {
  node: Registration!
  cursor: String!
}

enum RegistrationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  source_ASC
  source_DESC
  token_ASC
  token_DESC
  tokenExpiry_ASC
  tokenExpiry_DESC
}

type RegistrationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  email: String!
  source: String!
  token: String!
  tokenExpiry: Float!
}

type RegistrationSubscriptionPayload {
  mutation: MutationType!
  node: Registration
  updatedFields: [String!]
  previousValues: RegistrationPreviousValues
}

input RegistrationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RegistrationWhereInput
  AND: [RegistrationSubscriptionWhereInput!]
  OR: [RegistrationSubscriptionWhereInput!]
  NOT: [RegistrationSubscriptionWhereInput!]
}

input RegistrationUpdateInput {
  firstName: String
  lastName: String
  email: String
  source: String
  token: String
  tokenExpiry: Float
}

input RegistrationUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  source: String
  token: String
  tokenExpiry: Float
}

input RegistrationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  tokenExpiry: Float
  tokenExpiry_not: Float
  tokenExpiry_in: [Float!]
  tokenExpiry_not_in: [Float!]
  tokenExpiry_lt: Float
  tokenExpiry_lte: Float
  tokenExpiry_gt: Float
  tokenExpiry_gte: Float
  AND: [RegistrationWhereInput!]
  OR: [RegistrationWhereInput!]
  NOT: [RegistrationWhereInput!]
}

input RegistrationWhereUniqueInput {
  id: ID
  token: String
}

type RigImage {
  id: ID!
  image: CloudinaryImage
}

type RigImageConnection {
  pageInfo: PageInfo!
  edges: [RigImageEdge]!
  aggregate: AggregateRigImage!
}

input RigImageCreateInput {
  id: ID
  image: CloudinaryImageCreateOneInput
}

input RigImageCreateOneInput {
  create: RigImageCreateInput
  connect: RigImageWhereUniqueInput
}

type RigImageEdge {
  node: RigImage!
  cursor: String!
}

enum RigImageOrderByInput {
  id_ASC
  id_DESC
}

type RigImagePreviousValues {
  id: ID!
}

type RigImageSubscriptionPayload {
  mutation: MutationType!
  node: RigImage
  updatedFields: [String!]
  previousValues: RigImagePreviousValues
}

input RigImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RigImageWhereInput
  AND: [RigImageSubscriptionWhereInput!]
  OR: [RigImageSubscriptionWhereInput!]
  NOT: [RigImageSubscriptionWhereInput!]
}

input RigImageUpdateDataInput {
  image: CloudinaryImageUpdateOneInput
}

input RigImageUpdateInput {
  image: CloudinaryImageUpdateOneInput
}

input RigImageUpdateOneInput {
  create: RigImageCreateInput
  update: RigImageUpdateDataInput
  upsert: RigImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: RigImageWhereUniqueInput
}

input RigImageUpsertNestedInput {
  update: RigImageUpdateDataInput!
  create: RigImageCreateInput!
}

input RigImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  image: CloudinaryImageWhereInput
  AND: [RigImageWhereInput!]
  OR: [RigImageWhereInput!]
  NOT: [RigImageWhereInput!]
}

input RigImageWhereUniqueInput {
  id: ID
}

enum Role {
  ADMIN
  OFFICER
  RUN_MASTER
  RUN_LEADER
  USER
}

type RSVP {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  member: User!
  event: Event!
  status: RSVPStatus!
}

type RSVPConnection {
  pageInfo: PageInfo!
  edges: [RSVPEdge]!
  aggregate: AggregateRSVP!
}

input RSVPCreateInput {
  id: ID
  member: UserCreateOneWithoutEventsRSVPdInput!
  event: EventCreateOneWithoutRsvpsInput!
  status: RSVPStatus
}

input RSVPCreateManyWithoutEventInput {
  create: [RSVPCreateWithoutEventInput!]
  connect: [RSVPWhereUniqueInput!]
}

input RSVPCreateManyWithoutMemberInput {
  create: [RSVPCreateWithoutMemberInput!]
  connect: [RSVPWhereUniqueInput!]
}

input RSVPCreateWithoutEventInput {
  id: ID
  member: UserCreateOneWithoutEventsRSVPdInput!
  status: RSVPStatus
}

input RSVPCreateWithoutMemberInput {
  id: ID
  event: EventCreateOneWithoutRsvpsInput!
  status: RSVPStatus
}

type RSVPEdge {
  node: RSVP!
  cursor: String!
}

enum RSVPOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
}

type RSVPPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: RSVPStatus!
}

input RSVPScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  status: RSVPStatus
  status_not: RSVPStatus
  status_in: [RSVPStatus!]
  status_not_in: [RSVPStatus!]
  AND: [RSVPScalarWhereInput!]
  OR: [RSVPScalarWhereInput!]
  NOT: [RSVPScalarWhereInput!]
}

enum RSVPStatus {
  NONE
  CANT_GO
  GOING
  MAYBE
}

type RSVPSubscriptionPayload {
  mutation: MutationType!
  node: RSVP
  updatedFields: [String!]
  previousValues: RSVPPreviousValues
}

input RSVPSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RSVPWhereInput
  AND: [RSVPSubscriptionWhereInput!]
  OR: [RSVPSubscriptionWhereInput!]
  NOT: [RSVPSubscriptionWhereInput!]
}

input RSVPUpdateInput {
  member: UserUpdateOneRequiredWithoutEventsRSVPdInput
  event: EventUpdateOneRequiredWithoutRsvpsInput
  status: RSVPStatus
}

input RSVPUpdateManyDataInput {
  status: RSVPStatus
}

input RSVPUpdateManyMutationInput {
  status: RSVPStatus
}

input RSVPUpdateManyWithoutEventInput {
  create: [RSVPCreateWithoutEventInput!]
  delete: [RSVPWhereUniqueInput!]
  connect: [RSVPWhereUniqueInput!]
  set: [RSVPWhereUniqueInput!]
  disconnect: [RSVPWhereUniqueInput!]
  update: [RSVPUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [RSVPUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [RSVPScalarWhereInput!]
  updateMany: [RSVPUpdateManyWithWhereNestedInput!]
}

input RSVPUpdateManyWithoutMemberInput {
  create: [RSVPCreateWithoutMemberInput!]
  delete: [RSVPWhereUniqueInput!]
  connect: [RSVPWhereUniqueInput!]
  set: [RSVPWhereUniqueInput!]
  disconnect: [RSVPWhereUniqueInput!]
  update: [RSVPUpdateWithWhereUniqueWithoutMemberInput!]
  upsert: [RSVPUpsertWithWhereUniqueWithoutMemberInput!]
  deleteMany: [RSVPScalarWhereInput!]
  updateMany: [RSVPUpdateManyWithWhereNestedInput!]
}

input RSVPUpdateManyWithWhereNestedInput {
  where: RSVPScalarWhereInput!
  data: RSVPUpdateManyDataInput!
}

input RSVPUpdateWithoutEventDataInput {
  member: UserUpdateOneRequiredWithoutEventsRSVPdInput
  status: RSVPStatus
}

input RSVPUpdateWithoutMemberDataInput {
  event: EventUpdateOneRequiredWithoutRsvpsInput
  status: RSVPStatus
}

input RSVPUpdateWithWhereUniqueWithoutEventInput {
  where: RSVPWhereUniqueInput!
  data: RSVPUpdateWithoutEventDataInput!
}

input RSVPUpdateWithWhereUniqueWithoutMemberInput {
  where: RSVPWhereUniqueInput!
  data: RSVPUpdateWithoutMemberDataInput!
}

input RSVPUpsertWithWhereUniqueWithoutEventInput {
  where: RSVPWhereUniqueInput!
  update: RSVPUpdateWithoutEventDataInput!
  create: RSVPCreateWithoutEventInput!
}

input RSVPUpsertWithWhereUniqueWithoutMemberInput {
  where: RSVPWhereUniqueInput!
  update: RSVPUpdateWithoutMemberDataInput!
  create: RSVPCreateWithoutMemberInput!
}

input RSVPWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  member: UserWhereInput
  event: EventWhereInput
  status: RSVPStatus
  status_not: RSVPStatus
  status_in: [RSVPStatus!]
  status_not_in: [RSVPStatus!]
  AND: [RSVPWhereInput!]
  OR: [RSVPWhereInput!]
  NOT: [RSVPWhereInput!]
}

input RSVPWhereUniqueInput {
  id: ID
}

type RunReport {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  startTime: DateTime!
  endTime: DateTime!
  reportFiled: DateTime!
  reporter: User!
  title: String!
  description: String
  trail: Trail!
  event: Event
  weather: String!
  difficulty: TrailDifficulty!
  rating: Float!
  condition: Condition
  favorite: Boolean
}

type RunReportConnection {
  pageInfo: PageInfo!
  edges: [RunReportEdge]!
  aggregate: AggregateRunReport!
}

input RunReportCreateInput {
  id: ID
  startTime: DateTime!
  endTime: DateTime!
  reportFiled: DateTime!
  reporter: UserCreateOneWithoutRunReportsLoggedInput!
  title: String!
  description: String
  trail: TrailCreateOneWithoutRunReportsInput!
  event: EventCreateOneWithoutRunReportsInput
  weather: String!
  difficulty: TrailDifficulty!
  rating: Float!
  condition: ConditionCreateOneWithoutReportInput
  favorite: Boolean
}

input RunReportCreateManyWithoutEventInput {
  create: [RunReportCreateWithoutEventInput!]
  connect: [RunReportWhereUniqueInput!]
}

input RunReportCreateManyWithoutReporterInput {
  create: [RunReportCreateWithoutReporterInput!]
  connect: [RunReportWhereUniqueInput!]
}

input RunReportCreateManyWithoutTrailInput {
  create: [RunReportCreateWithoutTrailInput!]
  connect: [RunReportWhereUniqueInput!]
}

input RunReportCreateOneWithoutConditionInput {
  create: RunReportCreateWithoutConditionInput
  connect: RunReportWhereUniqueInput
}

input RunReportCreateWithoutConditionInput {
  id: ID
  startTime: DateTime!
  endTime: DateTime!
  reportFiled: DateTime!
  reporter: UserCreateOneWithoutRunReportsLoggedInput!
  title: String!
  description: String
  trail: TrailCreateOneWithoutRunReportsInput!
  event: EventCreateOneWithoutRunReportsInput
  weather: String!
  difficulty: TrailDifficulty!
  rating: Float!
  favorite: Boolean
}

input RunReportCreateWithoutEventInput {
  id: ID
  startTime: DateTime!
  endTime: DateTime!
  reportFiled: DateTime!
  reporter: UserCreateOneWithoutRunReportsLoggedInput!
  title: String!
  description: String
  trail: TrailCreateOneWithoutRunReportsInput!
  weather: String!
  difficulty: TrailDifficulty!
  rating: Float!
  condition: ConditionCreateOneWithoutReportInput
  favorite: Boolean
}

input RunReportCreateWithoutReporterInput {
  id: ID
  startTime: DateTime!
  endTime: DateTime!
  reportFiled: DateTime!
  title: String!
  description: String
  trail: TrailCreateOneWithoutRunReportsInput!
  event: EventCreateOneWithoutRunReportsInput
  weather: String!
  difficulty: TrailDifficulty!
  rating: Float!
  condition: ConditionCreateOneWithoutReportInput
  favorite: Boolean
}

input RunReportCreateWithoutTrailInput {
  id: ID
  startTime: DateTime!
  endTime: DateTime!
  reportFiled: DateTime!
  reporter: UserCreateOneWithoutRunReportsLoggedInput!
  title: String!
  description: String
  event: EventCreateOneWithoutRunReportsInput
  weather: String!
  difficulty: TrailDifficulty!
  rating: Float!
  condition: ConditionCreateOneWithoutReportInput
  favorite: Boolean
}

type RunReportEdge {
  node: RunReport!
  cursor: String!
}

enum RunReportOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  reportFiled_ASC
  reportFiled_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  weather_ASC
  weather_DESC
  difficulty_ASC
  difficulty_DESC
  rating_ASC
  rating_DESC
  favorite_ASC
  favorite_DESC
}

type RunReportPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  startTime: DateTime!
  endTime: DateTime!
  reportFiled: DateTime!
  title: String!
  description: String
  weather: String!
  difficulty: TrailDifficulty!
  rating: Float!
  favorite: Boolean
}

input RunReportScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  reportFiled: DateTime
  reportFiled_not: DateTime
  reportFiled_in: [DateTime!]
  reportFiled_not_in: [DateTime!]
  reportFiled_lt: DateTime
  reportFiled_lte: DateTime
  reportFiled_gt: DateTime
  reportFiled_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  weather: String
  weather_not: String
  weather_in: [String!]
  weather_not_in: [String!]
  weather_lt: String
  weather_lte: String
  weather_gt: String
  weather_gte: String
  weather_contains: String
  weather_not_contains: String
  weather_starts_with: String
  weather_not_starts_with: String
  weather_ends_with: String
  weather_not_ends_with: String
  difficulty: TrailDifficulty
  difficulty_not: TrailDifficulty
  difficulty_in: [TrailDifficulty!]
  difficulty_not_in: [TrailDifficulty!]
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  favorite: Boolean
  favorite_not: Boolean
  AND: [RunReportScalarWhereInput!]
  OR: [RunReportScalarWhereInput!]
  NOT: [RunReportScalarWhereInput!]
}

type RunReportSubscriptionPayload {
  mutation: MutationType!
  node: RunReport
  updatedFields: [String!]
  previousValues: RunReportPreviousValues
}

input RunReportSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RunReportWhereInput
  AND: [RunReportSubscriptionWhereInput!]
  OR: [RunReportSubscriptionWhereInput!]
  NOT: [RunReportSubscriptionWhereInput!]
}

input RunReportUpdateInput {
  startTime: DateTime
  endTime: DateTime
  reportFiled: DateTime
  reporter: UserUpdateOneRequiredWithoutRunReportsLoggedInput
  title: String
  description: String
  trail: TrailUpdateOneRequiredWithoutRunReportsInput
  event: EventUpdateOneWithoutRunReportsInput
  weather: String
  difficulty: TrailDifficulty
  rating: Float
  condition: ConditionUpdateOneWithoutReportInput
  favorite: Boolean
}

input RunReportUpdateManyDataInput {
  startTime: DateTime
  endTime: DateTime
  reportFiled: DateTime
  title: String
  description: String
  weather: String
  difficulty: TrailDifficulty
  rating: Float
  favorite: Boolean
}

input RunReportUpdateManyMutationInput {
  startTime: DateTime
  endTime: DateTime
  reportFiled: DateTime
  title: String
  description: String
  weather: String
  difficulty: TrailDifficulty
  rating: Float
  favorite: Boolean
}

input RunReportUpdateManyWithoutEventInput {
  create: [RunReportCreateWithoutEventInput!]
  delete: [RunReportWhereUniqueInput!]
  connect: [RunReportWhereUniqueInput!]
  set: [RunReportWhereUniqueInput!]
  disconnect: [RunReportWhereUniqueInput!]
  update: [RunReportUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [RunReportUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [RunReportScalarWhereInput!]
  updateMany: [RunReportUpdateManyWithWhereNestedInput!]
}

input RunReportUpdateManyWithoutReporterInput {
  create: [RunReportCreateWithoutReporterInput!]
  delete: [RunReportWhereUniqueInput!]
  connect: [RunReportWhereUniqueInput!]
  set: [RunReportWhereUniqueInput!]
  disconnect: [RunReportWhereUniqueInput!]
  update: [RunReportUpdateWithWhereUniqueWithoutReporterInput!]
  upsert: [RunReportUpsertWithWhereUniqueWithoutReporterInput!]
  deleteMany: [RunReportScalarWhereInput!]
  updateMany: [RunReportUpdateManyWithWhereNestedInput!]
}

input RunReportUpdateManyWithoutTrailInput {
  create: [RunReportCreateWithoutTrailInput!]
  delete: [RunReportWhereUniqueInput!]
  connect: [RunReportWhereUniqueInput!]
  set: [RunReportWhereUniqueInput!]
  disconnect: [RunReportWhereUniqueInput!]
  update: [RunReportUpdateWithWhereUniqueWithoutTrailInput!]
  upsert: [RunReportUpsertWithWhereUniqueWithoutTrailInput!]
  deleteMany: [RunReportScalarWhereInput!]
  updateMany: [RunReportUpdateManyWithWhereNestedInput!]
}

input RunReportUpdateManyWithWhereNestedInput {
  where: RunReportScalarWhereInput!
  data: RunReportUpdateManyDataInput!
}

input RunReportUpdateOneRequiredWithoutConditionInput {
  create: RunReportCreateWithoutConditionInput
  update: RunReportUpdateWithoutConditionDataInput
  upsert: RunReportUpsertWithoutConditionInput
  connect: RunReportWhereUniqueInput
}

input RunReportUpdateWithoutConditionDataInput {
  startTime: DateTime
  endTime: DateTime
  reportFiled: DateTime
  reporter: UserUpdateOneRequiredWithoutRunReportsLoggedInput
  title: String
  description: String
  trail: TrailUpdateOneRequiredWithoutRunReportsInput
  event: EventUpdateOneWithoutRunReportsInput
  weather: String
  difficulty: TrailDifficulty
  rating: Float
  favorite: Boolean
}

input RunReportUpdateWithoutEventDataInput {
  startTime: DateTime
  endTime: DateTime
  reportFiled: DateTime
  reporter: UserUpdateOneRequiredWithoutRunReportsLoggedInput
  title: String
  description: String
  trail: TrailUpdateOneRequiredWithoutRunReportsInput
  weather: String
  difficulty: TrailDifficulty
  rating: Float
  condition: ConditionUpdateOneWithoutReportInput
  favorite: Boolean
}

input RunReportUpdateWithoutReporterDataInput {
  startTime: DateTime
  endTime: DateTime
  reportFiled: DateTime
  title: String
  description: String
  trail: TrailUpdateOneRequiredWithoutRunReportsInput
  event: EventUpdateOneWithoutRunReportsInput
  weather: String
  difficulty: TrailDifficulty
  rating: Float
  condition: ConditionUpdateOneWithoutReportInput
  favorite: Boolean
}

input RunReportUpdateWithoutTrailDataInput {
  startTime: DateTime
  endTime: DateTime
  reportFiled: DateTime
  reporter: UserUpdateOneRequiredWithoutRunReportsLoggedInput
  title: String
  description: String
  event: EventUpdateOneWithoutRunReportsInput
  weather: String
  difficulty: TrailDifficulty
  rating: Float
  condition: ConditionUpdateOneWithoutReportInput
  favorite: Boolean
}

input RunReportUpdateWithWhereUniqueWithoutEventInput {
  where: RunReportWhereUniqueInput!
  data: RunReportUpdateWithoutEventDataInput!
}

input RunReportUpdateWithWhereUniqueWithoutReporterInput {
  where: RunReportWhereUniqueInput!
  data: RunReportUpdateWithoutReporterDataInput!
}

input RunReportUpdateWithWhereUniqueWithoutTrailInput {
  where: RunReportWhereUniqueInput!
  data: RunReportUpdateWithoutTrailDataInput!
}

input RunReportUpsertWithoutConditionInput {
  update: RunReportUpdateWithoutConditionDataInput!
  create: RunReportCreateWithoutConditionInput!
}

input RunReportUpsertWithWhereUniqueWithoutEventInput {
  where: RunReportWhereUniqueInput!
  update: RunReportUpdateWithoutEventDataInput!
  create: RunReportCreateWithoutEventInput!
}

input RunReportUpsertWithWhereUniqueWithoutReporterInput {
  where: RunReportWhereUniqueInput!
  update: RunReportUpdateWithoutReporterDataInput!
  create: RunReportCreateWithoutReporterInput!
}

input RunReportUpsertWithWhereUniqueWithoutTrailInput {
  where: RunReportWhereUniqueInput!
  update: RunReportUpdateWithoutTrailDataInput!
  create: RunReportCreateWithoutTrailInput!
}

input RunReportWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  reportFiled: DateTime
  reportFiled_not: DateTime
  reportFiled_in: [DateTime!]
  reportFiled_not_in: [DateTime!]
  reportFiled_lt: DateTime
  reportFiled_lte: DateTime
  reportFiled_gt: DateTime
  reportFiled_gte: DateTime
  reporter: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  trail: TrailWhereInput
  event: EventWhereInput
  weather: String
  weather_not: String
  weather_in: [String!]
  weather_not_in: [String!]
  weather_lt: String
  weather_lte: String
  weather_gt: String
  weather_gte: String
  weather_contains: String
  weather_not_contains: String
  weather_starts_with: String
  weather_not_starts_with: String
  weather_ends_with: String
  weather_not_ends_with: String
  difficulty: TrailDifficulty
  difficulty_not: TrailDifficulty
  difficulty_in: [TrailDifficulty!]
  difficulty_not_in: [TrailDifficulty!]
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  condition: ConditionWhereInput
  favorite: Boolean
  favorite_not: Boolean
  AND: [RunReportWhereInput!]
  OR: [RunReportWhereInput!]
  NOT: [RunReportWhereInput!]
}

input RunReportWhereUniqueInput {
  id: ID
}

type Subscription {
  activityLogItem(where: ActivityLogItemSubscriptionWhereInput): ActivityLogItemSubscriptionPayload
  ballot(where: BallotSubscriptionWhereInput): BallotSubscriptionPayload
  bandaid(where: BandaidSubscriptionWhereInput): BandaidSubscriptionPayload
  cloudinaryImage(where: CloudinaryImageSubscriptionWhereInput): CloudinaryImageSubscriptionPayload
  condition(where: ConditionSubscriptionWhereInput): ConditionSubscriptionPayload
  contactInfo(where: ContactInfoSubscriptionWhereInput): ContactInfoSubscriptionPayload
  election(where: ElectionSubscriptionWhereInput): ElectionSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  membershipLogItem(where: MembershipLogItemSubscriptionWhereInput): MembershipLogItemSubscriptionPayload
  preference(where: PreferenceSubscriptionWhereInput): PreferenceSubscriptionPayload
  rSVP(where: RSVPSubscriptionWhereInput): RSVPSubscriptionPayload
  registration(where: RegistrationSubscriptionWhereInput): RegistrationSubscriptionPayload
  rigImage(where: RigImageSubscriptionWhereInput): RigImageSubscriptionPayload
  runReport(where: RunReportSubscriptionWhereInput): RunReportSubscriptionPayload
  trail(where: TrailSubscriptionWhereInput): TrailSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userMeta(where: UserMetaSubscriptionWhereInput): UserMetaSubscriptionPayload
  vehicle(where: VehicleSubscriptionWhereInput): VehicleSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

enum Title {
  WEBMASTER
  CHARTER_MEMBER
  HISTORIAN
}

type Trail {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  slug: String!
  name: String
  description: String
  featuredImage: CloudinaryImage
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  pastEvents(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  visitors(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  runReports(where: RunReportWhereInput, orderBy: RunReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunReport!]
}

enum TrailCondition {
  CLEAR
  MINOR_ISSUES
  MAJOR_ISSUES
  CLOSED
}

type TrailConnection {
  pageInfo: PageInfo!
  edges: [TrailEdge]!
  aggregate: AggregateTrail!
}

input TrailCreateInput {
  id: ID
  slug: String!
  name: String
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  pastEvents: EventCreateManyWithoutTrailInput
  visitors: UserCreateManyWithoutTrailsVisitedInput
  runReports: RunReportCreateManyWithoutTrailInput
}

input TrailCreateManyWithoutVisitorsInput {
  create: [TrailCreateWithoutVisitorsInput!]
  connect: [TrailWhereUniqueInput!]
}

input TrailCreateOneWithoutPastEventsInput {
  create: TrailCreateWithoutPastEventsInput
  connect: TrailWhereUniqueInput
}

input TrailCreateOneWithoutRunReportsInput {
  create: TrailCreateWithoutRunReportsInput
  connect: TrailWhereUniqueInput
}

input TrailCreateWithoutPastEventsInput {
  id: ID
  slug: String!
  name: String
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  visitors: UserCreateManyWithoutTrailsVisitedInput
  runReports: RunReportCreateManyWithoutTrailInput
}

input TrailCreateWithoutRunReportsInput {
  id: ID
  slug: String!
  name: String
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  pastEvents: EventCreateManyWithoutTrailInput
  visitors: UserCreateManyWithoutTrailsVisitedInput
}

input TrailCreateWithoutVisitorsInput {
  id: ID
  slug: String!
  name: String
  description: String
  featuredImage: CloudinaryImageCreateOneInput
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  pastEvents: EventCreateManyWithoutTrailInput
  runReports: RunReportCreateManyWithoutTrailInput
}

enum TrailDifficulty {
  UNKNOWN
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

type TrailEdge {
  node: Trail!
  cursor: String!
}

enum TrailOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  slug_ASC
  slug_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  trailheadCoords_ASC
  trailheadCoords_DESC
  address_ASC
  address_DESC
  avgDifficulty_ASC
  avgDifficulty_DESC
  avgRatings_ASC
  avgRatings_DESC
  currentConditions_ASC
  currentConditions_DESC
  conditionsLastReported_ASC
  conditionsLastReported_DESC
  favoriteCount_ASC
  favoriteCount_DESC
}

type TrailPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  slug: String!
  name: String
  description: String
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
}

input TrailScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  trailheadCoords: String
  trailheadCoords_not: String
  trailheadCoords_in: [String!]
  trailheadCoords_not_in: [String!]
  trailheadCoords_lt: String
  trailheadCoords_lte: String
  trailheadCoords_gt: String
  trailheadCoords_gte: String
  trailheadCoords_contains: String
  trailheadCoords_not_contains: String
  trailheadCoords_starts_with: String
  trailheadCoords_not_starts_with: String
  trailheadCoords_ends_with: String
  trailheadCoords_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  avgDifficulty: TrailDifficulty
  avgDifficulty_not: TrailDifficulty
  avgDifficulty_in: [TrailDifficulty!]
  avgDifficulty_not_in: [TrailDifficulty!]
  avgRatings: Float
  avgRatings_not: Float
  avgRatings_in: [Float!]
  avgRatings_not_in: [Float!]
  avgRatings_lt: Float
  avgRatings_lte: Float
  avgRatings_gt: Float
  avgRatings_gte: Float
  currentConditions: String
  currentConditions_not: String
  currentConditions_in: [String!]
  currentConditions_not_in: [String!]
  currentConditions_lt: String
  currentConditions_lte: String
  currentConditions_gt: String
  currentConditions_gte: String
  currentConditions_contains: String
  currentConditions_not_contains: String
  currentConditions_starts_with: String
  currentConditions_not_starts_with: String
  currentConditions_ends_with: String
  currentConditions_not_ends_with: String
  conditionsLastReported: DateTime
  conditionsLastReported_not: DateTime
  conditionsLastReported_in: [DateTime!]
  conditionsLastReported_not_in: [DateTime!]
  conditionsLastReported_lt: DateTime
  conditionsLastReported_lte: DateTime
  conditionsLastReported_gt: DateTime
  conditionsLastReported_gte: DateTime
  favoriteCount: Int
  favoriteCount_not: Int
  favoriteCount_in: [Int!]
  favoriteCount_not_in: [Int!]
  favoriteCount_lt: Int
  favoriteCount_lte: Int
  favoriteCount_gt: Int
  favoriteCount_gte: Int
  AND: [TrailScalarWhereInput!]
  OR: [TrailScalarWhereInput!]
  NOT: [TrailScalarWhereInput!]
}

type TrailSubscriptionPayload {
  mutation: MutationType!
  node: Trail
  updatedFields: [String!]
  previousValues: TrailPreviousValues
}

input TrailSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TrailWhereInput
  AND: [TrailSubscriptionWhereInput!]
  OR: [TrailSubscriptionWhereInput!]
  NOT: [TrailSubscriptionWhereInput!]
}

input TrailUpdateInput {
  slug: String
  name: String
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  pastEvents: EventUpdateManyWithoutTrailInput
  visitors: UserUpdateManyWithoutTrailsVisitedInput
  runReports: RunReportUpdateManyWithoutTrailInput
}

input TrailUpdateManyDataInput {
  slug: String
  name: String
  description: String
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
}

input TrailUpdateManyMutationInput {
  slug: String
  name: String
  description: String
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
}

input TrailUpdateManyWithoutVisitorsInput {
  create: [TrailCreateWithoutVisitorsInput!]
  delete: [TrailWhereUniqueInput!]
  connect: [TrailWhereUniqueInput!]
  set: [TrailWhereUniqueInput!]
  disconnect: [TrailWhereUniqueInput!]
  update: [TrailUpdateWithWhereUniqueWithoutVisitorsInput!]
  upsert: [TrailUpsertWithWhereUniqueWithoutVisitorsInput!]
  deleteMany: [TrailScalarWhereInput!]
  updateMany: [TrailUpdateManyWithWhereNestedInput!]
}

input TrailUpdateManyWithWhereNestedInput {
  where: TrailScalarWhereInput!
  data: TrailUpdateManyDataInput!
}

input TrailUpdateOneRequiredWithoutRunReportsInput {
  create: TrailCreateWithoutRunReportsInput
  update: TrailUpdateWithoutRunReportsDataInput
  upsert: TrailUpsertWithoutRunReportsInput
  connect: TrailWhereUniqueInput
}

input TrailUpdateOneWithoutPastEventsInput {
  create: TrailCreateWithoutPastEventsInput
  update: TrailUpdateWithoutPastEventsDataInput
  upsert: TrailUpsertWithoutPastEventsInput
  delete: Boolean
  disconnect: Boolean
  connect: TrailWhereUniqueInput
}

input TrailUpdateWithoutPastEventsDataInput {
  slug: String
  name: String
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  visitors: UserUpdateManyWithoutTrailsVisitedInput
  runReports: RunReportUpdateManyWithoutTrailInput
}

input TrailUpdateWithoutRunReportsDataInput {
  slug: String
  name: String
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  pastEvents: EventUpdateManyWithoutTrailInput
  visitors: UserUpdateManyWithoutTrailsVisitedInput
}

input TrailUpdateWithoutVisitorsDataInput {
  slug: String
  name: String
  description: String
  featuredImage: CloudinaryImageUpdateOneInput
  trailheadCoords: String
  address: String
  avgDifficulty: TrailDifficulty
  avgRatings: Float
  currentConditions: String
  conditionsLastReported: DateTime
  favoriteCount: Int
  pastEvents: EventUpdateManyWithoutTrailInput
  runReports: RunReportUpdateManyWithoutTrailInput
}

input TrailUpdateWithWhereUniqueWithoutVisitorsInput {
  where: TrailWhereUniqueInput!
  data: TrailUpdateWithoutVisitorsDataInput!
}

input TrailUpsertWithoutPastEventsInput {
  update: TrailUpdateWithoutPastEventsDataInput!
  create: TrailCreateWithoutPastEventsInput!
}

input TrailUpsertWithoutRunReportsInput {
  update: TrailUpdateWithoutRunReportsDataInput!
  create: TrailCreateWithoutRunReportsInput!
}

input TrailUpsertWithWhereUniqueWithoutVisitorsInput {
  where: TrailWhereUniqueInput!
  update: TrailUpdateWithoutVisitorsDataInput!
  create: TrailCreateWithoutVisitorsInput!
}

input TrailWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  featuredImage: CloudinaryImageWhereInput
  trailheadCoords: String
  trailheadCoords_not: String
  trailheadCoords_in: [String!]
  trailheadCoords_not_in: [String!]
  trailheadCoords_lt: String
  trailheadCoords_lte: String
  trailheadCoords_gt: String
  trailheadCoords_gte: String
  trailheadCoords_contains: String
  trailheadCoords_not_contains: String
  trailheadCoords_starts_with: String
  trailheadCoords_not_starts_with: String
  trailheadCoords_ends_with: String
  trailheadCoords_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  avgDifficulty: TrailDifficulty
  avgDifficulty_not: TrailDifficulty
  avgDifficulty_in: [TrailDifficulty!]
  avgDifficulty_not_in: [TrailDifficulty!]
  avgRatings: Float
  avgRatings_not: Float
  avgRatings_in: [Float!]
  avgRatings_not_in: [Float!]
  avgRatings_lt: Float
  avgRatings_lte: Float
  avgRatings_gt: Float
  avgRatings_gte: Float
  currentConditions: String
  currentConditions_not: String
  currentConditions_in: [String!]
  currentConditions_not_in: [String!]
  currentConditions_lt: String
  currentConditions_lte: String
  currentConditions_gt: String
  currentConditions_gte: String
  currentConditions_contains: String
  currentConditions_not_contains: String
  currentConditions_starts_with: String
  currentConditions_not_starts_with: String
  currentConditions_ends_with: String
  currentConditions_not_ends_with: String
  conditionsLastReported: DateTime
  conditionsLastReported_not: DateTime
  conditionsLastReported_in: [DateTime!]
  conditionsLastReported_not_in: [DateTime!]
  conditionsLastReported_lt: DateTime
  conditionsLastReported_lte: DateTime
  conditionsLastReported_gt: DateTime
  conditionsLastReported_gte: DateTime
  favoriteCount: Int
  favoriteCount_not: Int
  favoriteCount_in: [Int!]
  favoriteCount_not_in: [Int!]
  favoriteCount_lt: Int
  favoriteCount_lte: Int
  favoriteCount_gt: Int
  favoriteCount_gte: Int
  pastEvents_every: EventWhereInput
  pastEvents_some: EventWhereInput
  pastEvents_none: EventWhereInput
  visitors_every: UserWhereInput
  visitors_some: UserWhereInput
  visitors_none: UserWhereInput
  runReports_every: RunReportWhereInput
  runReports_some: RunReportWhereInput
  runReports_none: RunReportWhereInput
  AND: [TrailWhereInput!]
  OR: [TrailWhereInput!]
  NOT: [TrailWhereInput!]
}

input TrailWhereUniqueInput {
  id: ID
  slug: String
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfo
  preferences: Preference
  userMeta: UserMeta
  avatar: CloudinaryImage
  isCharterMember: Boolean
  rig: RigImage
  vehicle: Vehicle
  title: Title
  role: Role!
  accountStatus: AccountStatus!
  accountType: AccountType!
  office: Office
  candidateFor(where: BallotWhereInput, orderBy: BallotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ballot!]
  votesReceived(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  votedFor(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  comfortLevel: String
  activityLog(where: ActivityLogItemWhereInput, orderBy: ActivityLogItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityLogItem!]
  membershipLog(where: MembershipLogItemWhereInput, orderBy: MembershipLogItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MembershipLogItem!]
  membershipLogContributions(where: MembershipLogItemWhereInput, orderBy: MembershipLogItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MembershipLogItem!]
  eventsCreated(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  eventsRSVPd(where: RSVPWhereInput, orderBy: RSVPOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RSVP!]
  eventsHosted(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  trailsVisited(where: TrailWhereInput, orderBy: TrailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trail!]
  bandaids(where: BandaidWhereInput, orderBy: BandaidOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bandaid!]
  runReportsLogged(where: RunReportWhereInput, orderBy: RunReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RunReport!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateManyWithoutCandidateForInput {
  create: [UserCreateWithoutCandidateForInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTrailsVisitedInput {
  create: [UserCreateWithoutTrailsVisitedInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutActivityLogInput {
  create: UserCreateWithoutActivityLogInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBandaidsInput {
  create: UserCreateWithoutBandaidsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutContactInfoInput {
  create: UserCreateWithoutContactInfoInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutEventsCreatedInput {
  create: UserCreateWithoutEventsCreatedInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutEventsHostedInput {
  create: UserCreateWithoutEventsHostedInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutEventsRSVPdInput {
  create: UserCreateWithoutEventsRSVPdInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMembershipLogContributionsInput {
  create: UserCreateWithoutMembershipLogContributionsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMembershipLogInput {
  create: UserCreateWithoutMembershipLogInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPreferencesInput {
  create: UserCreateWithoutPreferencesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRunReportsLoggedInput {
  create: UserCreateWithoutRunReportsLoggedInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserMetaInput {
  create: UserCreateWithoutUserMetaInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotedForInput {
  create: UserCreateWithoutVotedForInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesReceivedInput {
  create: UserCreateWithoutVotesReceivedInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutActivityLogInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutBandaidsInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutCandidateForInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutContactInfoInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutEventsCreatedInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutEventsHostedInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutEventsRSVPdInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutMembershipLogContributionsInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutMembershipLogInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutPreferencesInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutRunReportsLoggedInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
}

input UserCreateWithoutTrailsVisitedInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutUserMetaInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutVotedForInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votesReceived: VoteCreateManyWithoutCandidateInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

input UserCreateWithoutVotesReceivedInput {
  id: ID
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoCreateOneWithoutUserInput
  preferences: PreferenceCreateOneWithoutUserInput
  userMeta: UserMetaCreateOneWithoutUserInput
  avatar: CloudinaryImageCreateOneInput
  isCharterMember: Boolean
  rig: RigImageCreateOneInput
  vehicle: VehicleCreateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotCreateManyWithoutCandidatesInput
  votedFor: VoteCreateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemCreateManyWithoutUserInput
  membershipLog: MembershipLogItemCreateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemCreateManyWithoutLoggerInput
  eventsCreated: EventCreateManyWithoutCreatorInput
  eventsRSVPd: RSVPCreateManyWithoutMemberInput
  eventsHosted: EventCreateManyWithoutHostInput
  trailsVisited: TrailCreateManyWithoutVisitorsInput
  bandaids: BandaidCreateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportCreateManyWithoutReporterInput
}

type UserEdge {
  node: User!
  cursor: String!
}

type UserMeta {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime!
  user: User
  emailVerified: Boolean
  firstLoginComplete: Boolean
  accountSetupComplete: Boolean
  oldSitemigrationComplete: Boolean
}

type UserMetaConnection {
  pageInfo: PageInfo!
  edges: [UserMetaEdge]!
  aggregate: AggregateUserMeta!
}

input UserMetaCreateInput {
  id: ID
  user: UserCreateOneWithoutUserMetaInput
  emailVerified: Boolean
  firstLoginComplete: Boolean
  accountSetupComplete: Boolean
  oldSitemigrationComplete: Boolean
}

input UserMetaCreateOneWithoutUserInput {
  create: UserMetaCreateWithoutUserInput
  connect: UserMetaWhereUniqueInput
}

input UserMetaCreateWithoutUserInput {
  id: ID
  emailVerified: Boolean
  firstLoginComplete: Boolean
  accountSetupComplete: Boolean
  oldSitemigrationComplete: Boolean
}

type UserMetaEdge {
  node: UserMeta!
  cursor: String!
}

enum UserMetaOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  emailVerified_ASC
  emailVerified_DESC
  firstLoginComplete_ASC
  firstLoginComplete_DESC
  accountSetupComplete_ASC
  accountSetupComplete_DESC
  oldSitemigrationComplete_ASC
  oldSitemigrationComplete_DESC
}

type UserMetaPreviousValues {
  id: ID!
  createdAt: DateTime
  updatedAt: DateTime!
  emailVerified: Boolean
  firstLoginComplete: Boolean
  accountSetupComplete: Boolean
  oldSitemigrationComplete: Boolean
}

type UserMetaSubscriptionPayload {
  mutation: MutationType!
  node: UserMeta
  updatedFields: [String!]
  previousValues: UserMetaPreviousValues
}

input UserMetaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserMetaWhereInput
  AND: [UserMetaSubscriptionWhereInput!]
  OR: [UserMetaSubscriptionWhereInput!]
  NOT: [UserMetaSubscriptionWhereInput!]
}

input UserMetaUpdateInput {
  user: UserUpdateOneWithoutUserMetaInput
  emailVerified: Boolean
  firstLoginComplete: Boolean
  accountSetupComplete: Boolean
  oldSitemigrationComplete: Boolean
}

input UserMetaUpdateManyMutationInput {
  emailVerified: Boolean
  firstLoginComplete: Boolean
  accountSetupComplete: Boolean
  oldSitemigrationComplete: Boolean
}

input UserMetaUpdateOneWithoutUserInput {
  create: UserMetaCreateWithoutUserInput
  update: UserMetaUpdateWithoutUserDataInput
  upsert: UserMetaUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: UserMetaWhereUniqueInput
}

input UserMetaUpdateWithoutUserDataInput {
  emailVerified: Boolean
  firstLoginComplete: Boolean
  accountSetupComplete: Boolean
  oldSitemigrationComplete: Boolean
}

input UserMetaUpsertWithoutUserInput {
  update: UserMetaUpdateWithoutUserDataInput!
  create: UserMetaCreateWithoutUserInput!
}

input UserMetaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  emailVerified: Boolean
  emailVerified_not: Boolean
  firstLoginComplete: Boolean
  firstLoginComplete_not: Boolean
  accountSetupComplete: Boolean
  accountSetupComplete_not: Boolean
  oldSitemigrationComplete: Boolean
  oldSitemigrationComplete_not: Boolean
  AND: [UserMetaWhereInput!]
  OR: [UserMetaWhereInput!]
  NOT: [UserMetaWhereInput!]
}

input UserMetaWhereUniqueInput {
  id: ID
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  joined_ASC
  joined_DESC
  lastLogin_ASC
  lastLogin_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  gender_ASC
  gender_DESC
  birthdate_ASC
  birthdate_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  isCharterMember_ASC
  isCharterMember_DESC
  title_ASC
  title_DESC
  role_ASC
  role_DESC
  accountStatus_ASC
  accountStatus_DESC
  accountType_ASC
  accountType_DESC
  office_ASC
  office_DESC
  comfortLevel_ASC
  comfortLevel_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  joined: DateTime
  lastLogin: DateTime
  firstName: String!
  lastName: String!
  email: String!
  gender: Gender
  birthdate: DateTime
  username: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  isCharterMember: Boolean
  title: Title
  role: Role!
  accountStatus: AccountStatus!
  accountType: AccountType!
  office: Office
  comfortLevel: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  joined: DateTime
  joined_not: DateTime
  joined_in: [DateTime!]
  joined_not_in: [DateTime!]
  joined_lt: DateTime
  joined_lte: DateTime
  joined_gt: DateTime
  joined_gte: DateTime
  lastLogin: DateTime
  lastLogin_not: DateTime
  lastLogin_in: [DateTime!]
  lastLogin_not_in: [DateTime!]
  lastLogin_lt: DateTime
  lastLogin_lte: DateTime
  lastLogin_gt: DateTime
  lastLogin_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  gender: Gender
  gender_not: Gender
  gender_in: [Gender!]
  gender_not_in: [Gender!]
  birthdate: DateTime
  birthdate_not: DateTime
  birthdate_in: [DateTime!]
  birthdate_not_in: [DateTime!]
  birthdate_lt: DateTime
  birthdate_lte: DateTime
  birthdate_gt: DateTime
  birthdate_gte: DateTime
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  isCharterMember: Boolean
  isCharterMember_not: Boolean
  title: Title
  title_not: Title
  title_in: [Title!]
  title_not_in: [Title!]
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  accountStatus: AccountStatus
  accountStatus_not: AccountStatus
  accountStatus_in: [AccountStatus!]
  accountStatus_not_in: [AccountStatus!]
  accountType: AccountType
  accountType_not: AccountType
  accountType_in: [AccountType!]
  accountType_not_in: [AccountType!]
  office: Office
  office_not: Office
  office_in: [Office!]
  office_not_in: [Office!]
  comfortLevel: String
  comfortLevel_not: String
  comfortLevel_in: [String!]
  comfortLevel_not_in: [String!]
  comfortLevel_lt: String
  comfortLevel_lte: String
  comfortLevel_gt: String
  comfortLevel_gte: String
  comfortLevel_contains: String
  comfortLevel_not_contains: String
  comfortLevel_starts_with: String
  comfortLevel_not_starts_with: String
  comfortLevel_ends_with: String
  comfortLevel_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateManyDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  isCharterMember: Boolean
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  comfortLevel: String
}

input UserUpdateManyMutationInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  isCharterMember: Boolean
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  comfortLevel: String
}

input UserUpdateManyWithoutCandidateForInput {
  create: [UserCreateWithoutCandidateForInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCandidateForInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCandidateForInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutTrailsVisitedInput {
  create: [UserCreateWithoutTrailsVisitedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTrailsVisitedInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTrailsVisitedInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutActivityLogInput {
  create: UserCreateWithoutActivityLogInput
  update: UserUpdateWithoutActivityLogDataInput
  upsert: UserUpsertWithoutActivityLogInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutEventsCreatedInput {
  create: UserCreateWithoutEventsCreatedInput
  update: UserUpdateWithoutEventsCreatedDataInput
  upsert: UserUpsertWithoutEventsCreatedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutEventsRSVPdInput {
  create: UserCreateWithoutEventsRSVPdInput
  update: UserUpdateWithoutEventsRSVPdDataInput
  upsert: UserUpsertWithoutEventsRSVPdInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMembershipLogInput {
  create: UserCreateWithoutMembershipLogInput
  update: UserUpdateWithoutMembershipLogDataInput
  upsert: UserUpsertWithoutMembershipLogInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutRunReportsLoggedInput {
  create: UserCreateWithoutRunReportsLoggedInput
  update: UserUpdateWithoutRunReportsLoggedDataInput
  upsert: UserUpsertWithoutRunReportsLoggedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutVotedForInput {
  create: UserCreateWithoutVotedForInput
  update: UserUpdateWithoutVotedForDataInput
  upsert: UserUpsertWithoutVotedForInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutBandaidsInput {
  create: UserCreateWithoutBandaidsInput
  update: UserUpdateWithoutBandaidsDataInput
  upsert: UserUpsertWithoutBandaidsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutContactInfoInput {
  create: UserCreateWithoutContactInfoInput
  update: UserUpdateWithoutContactInfoDataInput
  upsert: UserUpsertWithoutContactInfoInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutEventsHostedInput {
  create: UserCreateWithoutEventsHostedInput
  update: UserUpdateWithoutEventsHostedDataInput
  upsert: UserUpsertWithoutEventsHostedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutMembershipLogContributionsInput {
  create: UserCreateWithoutMembershipLogContributionsInput
  update: UserUpdateWithoutMembershipLogContributionsDataInput
  upsert: UserUpsertWithoutMembershipLogContributionsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutPreferencesInput {
  create: UserCreateWithoutPreferencesInput
  update: UserUpdateWithoutPreferencesDataInput
  upsert: UserUpsertWithoutPreferencesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutUserMetaInput {
  create: UserCreateWithoutUserMetaInput
  update: UserUpdateWithoutUserMetaDataInput
  upsert: UserUpsertWithoutUserMetaInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutVotesReceivedInput {
  create: UserCreateWithoutVotesReceivedInput
  update: UserUpdateWithoutVotesReceivedDataInput
  upsert: UserUpsertWithoutVotesReceivedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutActivityLogDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutBandaidsDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutCandidateForDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutContactInfoDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutEventsCreatedDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutEventsHostedDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutEventsRSVPdDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutMembershipLogContributionsDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutMembershipLogDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutPreferencesDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutRunReportsLoggedDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
}

input UserUpdateWithoutTrailsVisitedDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutUserMetaDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutVotedForDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votesReceived: VoteUpdateManyWithoutCandidateInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithoutVotesReceivedDataInput {
  joined: DateTime
  lastLogin: DateTime
  firstName: String
  lastName: String
  email: String
  gender: Gender
  birthdate: DateTime
  username: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  contactInfo: ContactInfoUpdateOneWithoutUserInput
  preferences: PreferenceUpdateOneWithoutUserInput
  userMeta: UserMetaUpdateOneWithoutUserInput
  avatar: CloudinaryImageUpdateOneInput
  isCharterMember: Boolean
  rig: RigImageUpdateOneInput
  vehicle: VehicleUpdateOneInput
  title: Title
  role: Role
  accountStatus: AccountStatus
  accountType: AccountType
  office: Office
  candidateFor: BallotUpdateManyWithoutCandidatesInput
  votedFor: VoteUpdateManyWithoutVoterInput
  comfortLevel: String
  activityLog: ActivityLogItemUpdateManyWithoutUserInput
  membershipLog: MembershipLogItemUpdateManyWithoutUserInput
  membershipLogContributions: MembershipLogItemUpdateManyWithoutLoggerInput
  eventsCreated: EventUpdateManyWithoutCreatorInput
  eventsRSVPd: RSVPUpdateManyWithoutMemberInput
  eventsHosted: EventUpdateManyWithoutHostInput
  trailsVisited: TrailUpdateManyWithoutVisitorsInput
  bandaids: BandaidUpdateManyWithoutMemberInvolvedInput
  runReportsLogged: RunReportUpdateManyWithoutReporterInput
}

input UserUpdateWithWhereUniqueWithoutCandidateForInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCandidateForDataInput!
}

input UserUpdateWithWhereUniqueWithoutTrailsVisitedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTrailsVisitedDataInput!
}

input UserUpsertWithoutActivityLogInput {
  update: UserUpdateWithoutActivityLogDataInput!
  create: UserCreateWithoutActivityLogInput!
}

input UserUpsertWithoutBandaidsInput {
  update: UserUpdateWithoutBandaidsDataInput!
  create: UserCreateWithoutBandaidsInput!
}

input UserUpsertWithoutContactInfoInput {
  update: UserUpdateWithoutContactInfoDataInput!
  create: UserCreateWithoutContactInfoInput!
}

input UserUpsertWithoutEventsCreatedInput {
  update: UserUpdateWithoutEventsCreatedDataInput!
  create: UserCreateWithoutEventsCreatedInput!
}

input UserUpsertWithoutEventsHostedInput {
  update: UserUpdateWithoutEventsHostedDataInput!
  create: UserCreateWithoutEventsHostedInput!
}

input UserUpsertWithoutEventsRSVPdInput {
  update: UserUpdateWithoutEventsRSVPdDataInput!
  create: UserCreateWithoutEventsRSVPdInput!
}

input UserUpsertWithoutMembershipLogContributionsInput {
  update: UserUpdateWithoutMembershipLogContributionsDataInput!
  create: UserCreateWithoutMembershipLogContributionsInput!
}

input UserUpsertWithoutMembershipLogInput {
  update: UserUpdateWithoutMembershipLogDataInput!
  create: UserCreateWithoutMembershipLogInput!
}

input UserUpsertWithoutPreferencesInput {
  update: UserUpdateWithoutPreferencesDataInput!
  create: UserCreateWithoutPreferencesInput!
}

input UserUpsertWithoutRunReportsLoggedInput {
  update: UserUpdateWithoutRunReportsLoggedDataInput!
  create: UserCreateWithoutRunReportsLoggedInput!
}

input UserUpsertWithoutUserMetaInput {
  update: UserUpdateWithoutUserMetaDataInput!
  create: UserCreateWithoutUserMetaInput!
}

input UserUpsertWithoutVotedForInput {
  update: UserUpdateWithoutVotedForDataInput!
  create: UserCreateWithoutVotedForInput!
}

input UserUpsertWithoutVotesReceivedInput {
  update: UserUpdateWithoutVotesReceivedDataInput!
  create: UserCreateWithoutVotesReceivedInput!
}

input UserUpsertWithWhereUniqueWithoutCandidateForInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCandidateForDataInput!
  create: UserCreateWithoutCandidateForInput!
}

input UserUpsertWithWhereUniqueWithoutTrailsVisitedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTrailsVisitedDataInput!
  create: UserCreateWithoutTrailsVisitedInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  joined: DateTime
  joined_not: DateTime
  joined_in: [DateTime!]
  joined_not_in: [DateTime!]
  joined_lt: DateTime
  joined_lte: DateTime
  joined_gt: DateTime
  joined_gte: DateTime
  lastLogin: DateTime
  lastLogin_not: DateTime
  lastLogin_in: [DateTime!]
  lastLogin_not_in: [DateTime!]
  lastLogin_lt: DateTime
  lastLogin_lte: DateTime
  lastLogin_gt: DateTime
  lastLogin_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  gender: Gender
  gender_not: Gender
  gender_in: [Gender!]
  gender_not_in: [Gender!]
  birthdate: DateTime
  birthdate_not: DateTime
  birthdate_in: [DateTime!]
  birthdate_not_in: [DateTime!]
  birthdate_lt: DateTime
  birthdate_lte: DateTime
  birthdate_gt: DateTime
  birthdate_gte: DateTime
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  contactInfo: ContactInfoWhereInput
  preferences: PreferenceWhereInput
  userMeta: UserMetaWhereInput
  avatar: CloudinaryImageWhereInput
  isCharterMember: Boolean
  isCharterMember_not: Boolean
  rig: RigImageWhereInput
  vehicle: VehicleWhereInput
  title: Title
  title_not: Title
  title_in: [Title!]
  title_not_in: [Title!]
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  accountStatus: AccountStatus
  accountStatus_not: AccountStatus
  accountStatus_in: [AccountStatus!]
  accountStatus_not_in: [AccountStatus!]
  accountType: AccountType
  accountType_not: AccountType
  accountType_in: [AccountType!]
  accountType_not_in: [AccountType!]
  office: Office
  office_not: Office
  office_in: [Office!]
  office_not_in: [Office!]
  candidateFor_every: BallotWhereInput
  candidateFor_some: BallotWhereInput
  candidateFor_none: BallotWhereInput
  votesReceived_every: VoteWhereInput
  votesReceived_some: VoteWhereInput
  votesReceived_none: VoteWhereInput
  votedFor_every: VoteWhereInput
  votedFor_some: VoteWhereInput
  votedFor_none: VoteWhereInput
  comfortLevel: String
  comfortLevel_not: String
  comfortLevel_in: [String!]
  comfortLevel_not_in: [String!]
  comfortLevel_lt: String
  comfortLevel_lte: String
  comfortLevel_gt: String
  comfortLevel_gte: String
  comfortLevel_contains: String
  comfortLevel_not_contains: String
  comfortLevel_starts_with: String
  comfortLevel_not_starts_with: String
  comfortLevel_ends_with: String
  comfortLevel_not_ends_with: String
  activityLog_every: ActivityLogItemWhereInput
  activityLog_some: ActivityLogItemWhereInput
  activityLog_none: ActivityLogItemWhereInput
  membershipLog_every: MembershipLogItemWhereInput
  membershipLog_some: MembershipLogItemWhereInput
  membershipLog_none: MembershipLogItemWhereInput
  membershipLogContributions_every: MembershipLogItemWhereInput
  membershipLogContributions_some: MembershipLogItemWhereInput
  membershipLogContributions_none: MembershipLogItemWhereInput
  eventsCreated_every: EventWhereInput
  eventsCreated_some: EventWhereInput
  eventsCreated_none: EventWhereInput
  eventsRSVPd_every: RSVPWhereInput
  eventsRSVPd_some: RSVPWhereInput
  eventsRSVPd_none: RSVPWhereInput
  eventsHosted_every: EventWhereInput
  eventsHosted_some: EventWhereInput
  eventsHosted_none: EventWhereInput
  trailsVisited_every: TrailWhereInput
  trailsVisited_some: TrailWhereInput
  trailsVisited_none: TrailWhereInput
  bandaids_every: BandaidWhereInput
  bandaids_some: BandaidWhereInput
  bandaids_none: BandaidWhereInput
  runReportsLogged_every: RunReportWhereInput
  runReportsLogged_some: RunReportWhereInput
  runReportsLogged_none: RunReportWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
  office: Office
}

type Vehicle {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  year: Int!
  make: String!
  model: String!
  name: String
  trim: String
  image: CloudinaryImage
  outfitLevel: OutfitLevel
  mods: [String!]!
}

type VehicleConnection {
  pageInfo: PageInfo!
  edges: [VehicleEdge]!
  aggregate: AggregateVehicle!
}

input VehicleCreateInput {
  id: ID
  year: Int!
  make: String!
  model: String!
  name: String
  trim: String
  image: CloudinaryImageCreateOneInput
  outfitLevel: OutfitLevel
  mods: VehicleCreatemodsInput
}

input VehicleCreatemodsInput {
  set: [String!]
}

input VehicleCreateOneInput {
  create: VehicleCreateInput
  connect: VehicleWhereUniqueInput
}

type VehicleEdge {
  node: Vehicle!
  cursor: String!
}

enum VehicleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  year_ASC
  year_DESC
  make_ASC
  make_DESC
  model_ASC
  model_DESC
  name_ASC
  name_DESC
  trim_ASC
  trim_DESC
  outfitLevel_ASC
  outfitLevel_DESC
}

type VehiclePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  year: Int!
  make: String!
  model: String!
  name: String
  trim: String
  outfitLevel: OutfitLevel
  mods: [String!]!
}

type VehicleSubscriptionPayload {
  mutation: MutationType!
  node: Vehicle
  updatedFields: [String!]
  previousValues: VehiclePreviousValues
}

input VehicleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VehicleWhereInput
  AND: [VehicleSubscriptionWhereInput!]
  OR: [VehicleSubscriptionWhereInput!]
  NOT: [VehicleSubscriptionWhereInput!]
}

input VehicleUpdateDataInput {
  year: Int
  make: String
  model: String
  name: String
  trim: String
  image: CloudinaryImageUpdateOneInput
  outfitLevel: OutfitLevel
  mods: VehicleUpdatemodsInput
}

input VehicleUpdateInput {
  year: Int
  make: String
  model: String
  name: String
  trim: String
  image: CloudinaryImageUpdateOneInput
  outfitLevel: OutfitLevel
  mods: VehicleUpdatemodsInput
}

input VehicleUpdateManyMutationInput {
  year: Int
  make: String
  model: String
  name: String
  trim: String
  outfitLevel: OutfitLevel
  mods: VehicleUpdatemodsInput
}

input VehicleUpdatemodsInput {
  set: [String!]
}

input VehicleUpdateOneInput {
  create: VehicleCreateInput
  update: VehicleUpdateDataInput
  upsert: VehicleUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: VehicleWhereUniqueInput
}

input VehicleUpsertNestedInput {
  update: VehicleUpdateDataInput!
  create: VehicleCreateInput!
}

input VehicleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  make: String
  make_not: String
  make_in: [String!]
  make_not_in: [String!]
  make_lt: String
  make_lte: String
  make_gt: String
  make_gte: String
  make_contains: String
  make_not_contains: String
  make_starts_with: String
  make_not_starts_with: String
  make_ends_with: String
  make_not_ends_with: String
  model: String
  model_not: String
  model_in: [String!]
  model_not_in: [String!]
  model_lt: String
  model_lte: String
  model_gt: String
  model_gte: String
  model_contains: String
  model_not_contains: String
  model_starts_with: String
  model_not_starts_with: String
  model_ends_with: String
  model_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  trim: String
  trim_not: String
  trim_in: [String!]
  trim_not_in: [String!]
  trim_lt: String
  trim_lte: String
  trim_gt: String
  trim_gte: String
  trim_contains: String
  trim_not_contains: String
  trim_starts_with: String
  trim_not_starts_with: String
  trim_ends_with: String
  trim_not_ends_with: String
  image: CloudinaryImageWhereInput
  outfitLevel: OutfitLevel
  outfitLevel_not: OutfitLevel
  outfitLevel_in: [OutfitLevel!]
  outfitLevel_not_in: [OutfitLevel!]
  AND: [VehicleWhereInput!]
  OR: [VehicleWhereInput!]
  NOT: [VehicleWhereInput!]
}

input VehicleWhereUniqueInput {
  id: ID
}

type Vote {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  ballot: Ballot!
  candidate: User
  voter: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  ballot: BallotCreateOneWithoutVotesInput!
  candidate: UserCreateOneWithoutVotesReceivedInput
  voter: UserCreateOneWithoutVotedForInput!
}

input VoteCreateManyWithoutBallotInput {
  create: [VoteCreateWithoutBallotInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutCandidateInput {
  create: [VoteCreateWithoutCandidateInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutVoterInput {
  create: [VoteCreateWithoutVoterInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutBallotInput {
  id: ID
  candidate: UserCreateOneWithoutVotesReceivedInput
  voter: UserCreateOneWithoutVotedForInput!
}

input VoteCreateWithoutCandidateInput {
  id: ID
  ballot: BallotCreateOneWithoutVotesInput!
  voter: UserCreateOneWithoutVotedForInput!
}

input VoteCreateWithoutVoterInput {
  id: ID
  ballot: BallotCreateOneWithoutVotesInput!
  candidate: UserCreateOneWithoutVotesReceivedInput
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VotePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  ballot: BallotUpdateOneRequiredWithoutVotesInput
  candidate: UserUpdateOneWithoutVotesReceivedInput
  voter: UserUpdateOneRequiredWithoutVotedForInput
}

input VoteUpdateManyWithoutBallotInput {
  create: [VoteCreateWithoutBallotInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutBallotInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutBallotInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateManyWithoutCandidateInput {
  create: [VoteCreateWithoutCandidateInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutCandidateInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutCandidateInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateManyWithoutVoterInput {
  create: [VoteCreateWithoutVoterInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutVoterInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutVoterInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateWithoutBallotDataInput {
  candidate: UserUpdateOneWithoutVotesReceivedInput
  voter: UserUpdateOneRequiredWithoutVotedForInput
}

input VoteUpdateWithoutCandidateDataInput {
  ballot: BallotUpdateOneRequiredWithoutVotesInput
  voter: UserUpdateOneRequiredWithoutVotedForInput
}

input VoteUpdateWithoutVoterDataInput {
  ballot: BallotUpdateOneRequiredWithoutVotesInput
  candidate: UserUpdateOneWithoutVotesReceivedInput
}

input VoteUpdateWithWhereUniqueWithoutBallotInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutBallotDataInput!
}

input VoteUpdateWithWhereUniqueWithoutCandidateInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutCandidateDataInput!
}

input VoteUpdateWithWhereUniqueWithoutVoterInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutVoterDataInput!
}

input VoteUpsertWithWhereUniqueWithoutBallotInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutBallotDataInput!
  create: VoteCreateWithoutBallotInput!
}

input VoteUpsertWithWhereUniqueWithoutCandidateInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutCandidateDataInput!
  create: VoteCreateWithoutCandidateInput!
}

input VoteUpsertWithWhereUniqueWithoutVoterInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutVoterDataInput!
  create: VoteCreateWithoutVoterInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  ballot: BallotWhereInput
  candidate: UserWhereInput
  voter: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`;

/***/ }),

/***/ "./bundle/mail.ts":
/*!************************!*\
  !*** ./bundle/mail.ts ***!
  \************************/
/*! exports provided: sendTransactionalEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTransactionalEmail", function() { return sendTransactionalEmail; });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ "nodemailer");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import SendGrid, { MailService, MailDataRequired } from '@sendgrid/mail';
 // SendGrid.setApiKey(process.env.SENDGRID_API_KEY || '');

// interface Email extends EmailData {}
const sendTransactionalEmail = async emailData => {
  // const mailSettings = {};
  // if (process.env.NODE_ENV === 'production') {
  // This will send the email in sandbox mode
  // mailSettings.mail_settings = {
  //   sandbox_mode: {
  //     enable: true,
  //   },
  // };
  // const data: MailDataRequired = {
  //   ...emailData,
  //   // ...mailSettings,
  // };
  // return SendGrid.send(emailData);
  // } else {
  const transport = nodemailer__WEBPACK_IMPORTED_MODULE_0__["createTransport"]({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '00abda4abf8551',
      //generated by Mailtrap
      pass: '82046488050e87' //generated by Mailtrap

    }
  });

  const mailOptions = _objectSpread({
    from: 'no-reply@4-playersofcolorado.org'
  }, emailData);

  return transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new Error(error);
    }

    const msg = 'Message sent';
    console.log(`${msg}: ${info.messageId}`);
    return Promise.resolve(msg);
  }); // }
  // {
  //   to,
  //   from,
  //   subject,
  //   text,
  //   html,
  //   // templateId: 'd-f43daeeaef504760851f727007e0b5d0',
  //   // dynamic_template_data: {
  //   //   subject: 'Testing Templates',
  //   //   name: 'Some One',
  //   //   city: 'Denver',
  //   // },
  // },
};

/***/ }),

/***/ "./bundle/resolvers/Ballot.ts":
/*!************************************!*\
  !*** ./bundle/resolvers/Ballot.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Ballot = {
  // Pattern borrowed from playbook:
  // https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-add-a-custom/computed-field-to-a-prisma-model-via-the-application-schema-prisma-bindings
  async results({
    id
  }, args, ctx, info) {
    const votes = await ctx.db.query.votes({
      where: {
        ballot: {
          id
        }
      }
    }, info);
    const results = votes.reduce((accumulator, vote) => {
      let entryExists = false; // Does this entry exist in accumulator yet?

      const existingResults = accumulator.map(entry => {
        if (vote.candidate === null && entry.candidate === null || vote.candidate !== null && entry.candidate !== null && entry.candidate.id === vote.candidate.id) {
          entry.count++;
          entryExists = true;
        }

        return entry;
      });
      return entryExists ? [...existingResults] : [...accumulator, {
        count: 1,
        candidate: vote.candidate
      }];
    }, []);
    return results.sort((a, b) => {
      if (a.count < b.count) {
        return 1;
      }

      if (a.count > b.count) {
        return -1;
      }

      return 0;
    });
    return results;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Ballot);

/***/ }),

/***/ "./bundle/resolvers/Election.ts":
/*!**************************************!*\
  !*** ./bundle/resolvers/Election.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-binding */ "graphql-binding");
/* harmony import */ var graphql_binding__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_binding__WEBPACK_IMPORTED_MODULE_0__);

const Election = {
  races(parent, args, ctx, info) {
    const fragment = `fragment Result on Ballot { id }`;
    return ctx.db.query.ballots({}, Object(graphql_binding__WEBPACK_IMPORTED_MODULE_0__["addFragmentToInfo"])(info, fragment));
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Election);

/***/ }),

/***/ "./bundle/resolvers/Mutation.ts":
/*!**************************************!*\
  !*** ./bundle/resolvers/Mutation.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cloudinary */ "cloudinary");
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mail */ "./bundle/mail.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./bundle/utils/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./bundle/config.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const promisifiedRandomBytes = util__WEBPACK_IMPORTED_MODULE_3__["promisify"](crypto__WEBPACK_IMPORTED_MODULE_2__["randomBytes"]);
cloudinary__WEBPACK_IMPORTED_MODULE_5__["v2"].config({
  cloud_name: process.env.CLOUNDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});
const promisifiedUpload = util__WEBPACK_IMPORTED_MODULE_3__["promisify"](cloudinary__WEBPACK_IMPORTED_MODULE_5__["v2"].uploader.unsigned_upload);
const promisifiedDestroy = util__WEBPACK_IMPORTED_MODULE_3__["promisify"](cloudinary__WEBPACK_IMPORTED_MODULE_5__["v2"].uploader.destroy);
const HASH_SECRET = String(process.env.HASH_SECRET);
const JWT_SECRET = String(process.env.JWT_SECRET);

const getHash = async pw => {
  const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.hash(HASH_SECRET, 10);
  return bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.hash(pw, salt);
};

const tokenSettings = {
  httpOnly: true,
  maxAge: _utils__WEBPACK_IMPORTED_MODULE_7__["yearInMs"],
  secure: "development" === 'production',
  sameSite:  false ? undefined : 'None'
};
const Mutations = {
  async register(parent, args, ctx, info) {
    const {
      firstName,
      lastName,
      email,
      confirmEmail,
      source
    } = args;
    const lowercaseEmail = email.toLowerCase();
    const lowercaseConfirmEmail = confirmEmail.toLowerCase(); // VALIDATION

    if (!email) {
      throw new Error('Email is required');
    }

    if (lowercaseEmail !== lowercaseConfirmEmail) {
      throw new Error('Emails do not match');
    } // Create registration in database


    const token = (await promisifiedRandomBytes(20)).toString('hex'); // await db
    //   .insert({
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: lowercaseEmail,
    //     source,
    //     token,
    //     token_expiry: format(
    //       Date.now() + resetTokenTimeoutInMs,
    //       timestampFormat,
    //     ),
    //   })
    //   .into('registrations');

    await ctx.db.mutation.createRegistration({
      data: {
        firstName,
        lastName,
        email: lowercaseEmail,
        source,
        token,
        tokenExpiry: Date.now() + _utils__WEBPACK_IMPORTED_MODULE_7__["resetTokenTimeoutInMs"]
      }
    }, info);
    let emailDetails;

    switch (source) {
      case 'website':
        // User initiated
        emailDetails = {
          to: lowercaseEmail,
          from: 'no-reply@4-playersofcolorado.org',
          subject: 'Your 4-Players Account Registration',
          text: `
            ${firstName},
    
            Thanks for opting in!
    
            Visit this URL to create your profile:
            ${process.env.FRONTEND_URL}/signup?token=${token}

            If you have any questions, please contact webmaster@4-playersofcolorado.org
          `,
          html: `
            <p>${firstName},</p>
    
            <p>Thanks for opting in!</p>
    
            <p>Visit this URL to create your profile:
          ${process.env.FRONTEND_URL}/signup?token=${token}</p>

            <p>If you have any questions, please contact the <a href="mailto:webmaster@4-playersofcolorado.org">webmaster</a></p>
          `
        };
        break;

      case 'run': // User attended run

      case 'meeting':
        // User attended meeting
        emailDetails = {
          to: lowercaseEmail,
          from: 'no-reply@4-playersofcolorado.org',
          subject: 'Invitation to register at the 4-Players website',
          text: `
          Hi ${firstName},
  
          You recently attended a 4-Players of Colorado event as a guest and have been invited to create an account on the 4-Players website.
  
          Visit this URL to create your profile:
          ${process.env.FRONTEND_URL}/signup?token=${token}

          If you have any questions, please contact webmaster@4-playersofcolorado.org

          If this message was sent to you in error, kindly disregard.
        `,
          html: `
          <p>Hi ${firstName},</p>
  
          <p>You recently attended a 4-Players of Colorado event as a guest and have been invited to create an account on the 4-Players website.</p>

          <p>Visit this URL to create your profile:
        ${process.env.FRONTEND_URL}/signup?token=${token}</p>

          <p>If you have any questions, please contact the <a href="mailto:webmaster@4-playersofcolorado.org">webmaster</a></p>

          <p><small>If this message was sent to you in error, kindly disregard.</small></p>
        `
        };
        break;

      case 'admin': // Admin invited user directly

      default:
        emailDetails = {
          to: lowercaseEmail,
          from: 'no-reply@4-playersofcolorado.org',
          subject: 'Invitation to register at the 4-Players website',
          text: `
            Hi ${firstName},
    
            You've been invited by ${ctx.req.user.firstName} to create an account on the 4-Players of Colorado website.
    
            Visit this URL to create your profile:
            ${process.env.FRONTEND_URL}/signup?token=${token}

            If you have any questions, please contact webmaster@4-playersofcolorado.org

            If this message was sent to you in error, kindly disregard.
          `,
          html: `
            <p>Hi ${firstName},</p>
    
            <p>You've been invited by ${ctx.req.user.firstName} to create an account on the 4-Players of Colorado website.</p>

            <p>Visit this URL to create your profile:
          ${process.env.FRONTEND_URL}/signup?token=${token}</p>

            <p>If you have any questions, please contact the <a href="mailto:webmaster@4-playersofcolorado.org">webmaster</a></p>

            <p><small>If this message was sent to you in error, kindly disregard.</small></p>
          `
        };
    } // Email reset token


    return Object(_mail__WEBPACK_IMPORTED_MODULE_6__["sendTransactionalEmail"])(emailDetails).then(() => ({
      message: 'Registration was successful. Please check your email.'
    })).catch(err => {
      //Extract error msg
      // const { message, code, response } = err;
      //Extract response msg
      // const { headers, body } = response;
      throw new Error(err.toString());
    });
  },

  async signUp(parent, args, ctx, info) {
    const email = args.email.toLowerCase(); // VALIDATION
    // TODO Confirm all fields valid
    // TODO Lock out if under 18
    // Hash the password

    const password = await getHash(args.password);

    const {
      token,
      firstName,
      lastName,
      username
    } = args,
          newUser = _objectWithoutProperties(args, ["token", "firstName", "lastName", "username"]); // Create user in database


    try {
      const user = await ctx.db.mutation.createUser({
        data: _objectSpread({}, newUser, {
          email,
          firstName,
          lastName,
          username,
          password,
          lastLogin: new Date(),
          membershipLog: {
            create: [{
              time: new Date(),
              message: 'Account created',
              messageCode: 'ACCOUNT_CREATED'
            }]
          }
        })
      }, info); // Remove registration from database

      await ctx.db.mutation.deleteRegistration({
        where: {
          token
        }
      }); // Create JWT token for new user
      // const jwToken = jwt.sign({ userId: user.id }, JWT_SECRET);
      // Set the JWT as a cookie
      // ctx.res.cookie("token", jwToken, tokenSettings);
      // Send email to secretary

      return Object(_mail__WEBPACK_IMPORTED_MODULE_6__["sendTransactionalEmail"])({
        to: `4-Players Secretary <secretary@4-playersofcolorado.org>`,
        from: `4-Players Webmaster <no-reply@4-playersofcolorado.org>`,
        subject: '[4-Players] New Account Registration',
        text: `
        A new guest account has been created:
        ${process.env.FRONTEND_URL}/profile/${username}
      `,
        html: `
        <p>A new guest account has been created:
        ${process.env.FRONTEND_URL}/profile/${username}</p>
      `
      }).then(() => Object(_mail__WEBPACK_IMPORTED_MODULE_6__["sendTransactionalEmail"])({
        // Send email to user
        to: `${firstName} ${lastName} <${email}>`,
        from: `4-Players Webmaster <no-reply@4-playersofcolorado.org>`,
        subject: '[4-Players] New Account Registration',
        text: `
              Hi ${firstName},
      
              Congratulations! Your new account has been created:
              ${process.env.FRONTEND_URL}/profile/${username}

              The secretary will review your account within 1-2 business days. Please make sure your profile is filled out.
            `,
        html: `
              <p>Hi ${firstName},</p>
      
              <p>Congratulations! Your new account has been created:
              ${process.env.FRONTEND_URL}/profile/${username}</p>

              <p>The secretary will review your account within 1-2 business days. Please make sure your profile is filled out.</p>
            `
      })).then(() => ({
        message: 'Account created'
      })).catch(err => {
        //Extract error msg
        // const { message, code, response } = err;
        //Extract response msg
        // const { headers, body } = response;
        throw new Error(err);
      });
    } catch (error) {
      if (error.message === 'A unique constraint would be violated on User. Details: Field name = username') {
        throw new Error('That username is taken.');
      }

      if (error.message === 'A unique constraint would be violated on User. Details: Field name = email') {
        throw new Error('There is already an account with that email address. Try resetting your password.');
      }

      throw new Error(error);
    }
  },

  // async unlockNewAccount(args: any, ctx: any, info: any) {
  //   const email: string = args.email.toLowerCase();
  //   // Add membership log
  //   const logs = [
  //     {
  //       time: new Date(),
  //       message: `Account unlocked by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
  //       messageCode: 'ACCOUNT_UNLOCKED',
  //       logger: {
  //         connect: {
  //           id: ctx.req.userId,
  //         },
  //       },
  //     },
  //   ];
  //   // Update status
  //   await ctx.db.mutation.updateUser(
  //     {
  //       data: {
  //         accountStatus: args.accountStatus,
  //         membershipLog: {
  //           create: logs,
  //         },
  //       },
  //       where: {
  //         id: args.userId,
  //       },
  //     },
  //     info,
  //   );
  //   // Send email to user
  //   // TODO Hook up to welcome email template
  //   return sendTransactionalEmail({
  //     to: email,
  //     from: 'secretary@4-playersofcolorado.org',
  //     subject: '[4-Players] Account Approval',
  //     text: `
  //       Welcome, ${firstName}!
  //       Thanks for signing up!
  //       Visit this URL to log in:
  //       ${process.env.FRONTEND_URL}/login
  //     `,
  //     html: `
  //       <p>Welcome, ${firstName}!</p>
  //       <p>Thanks for signing up!</p>
  //       <p><a href="${process.env.FRONTEND_URL}/login">Visit the site</a> to log in</p>
  //     `,
  //   })
  //     .then(() => ({ message: 'Account unlock successful.' }))
  //     .catch((err) => {
  //       //Extract error msg
  //       // const { message, code, response } = err;
  //       //Extract response msg
  //       // const { headers, body } = response;
  //       throw new Error(err);
  //     });
  // },
  async login(parent, {
    username,
    password
  }, ctx, info) {
    // Check if there is a user with that username
    const user = await ctx.db.query.user({
      where: {
        username
      }
    });

    if (!user) {
      throw new Error('Username or password incorrect');
    } // Check if password is correct


    const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.compare(password, user.password);

    if (!valid) {
      throw new Error('Invalid password'); // fix
    } // Generate the JWT token


    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({
      userId: user.id
    }, String(process.env.JWT_SECRET)); // Set the cookie with the token

    ctx.res.cookie('token', token, tokenSettings); // Update role

    await ctx.db.mutation.updateUser({
      data: {
        lastLogin: new Date()
      },
      where: {
        id: user.id
      }
    }, info); // Return the user

    return {
      message: 'Successfully logged in'
    };
  },

  logout(parent, args, ctx, info) {
    ctx.res.clearCookie('token');
    return {
      message: 'Goodbye'
    };
  },

  async requestReset(parent, {
    email
  }, ctx, info) {
    // Check if this is a real user
    const user = await ctx.db.query.user({
      where: {
        email: email
      }
    });

    if (!user) {
      throw new Error('Invalid email entered');
    } // Set reset token and expiry


    const resetToken = (await promisifiedRandomBytes(20)).toString('hex');
    const resetTokenExpiry = Date.now() + _utils__WEBPACK_IMPORTED_MODULE_7__["resetTokenTimeoutInMs"];
    const res = await ctx.db.mutation.updateUser({
      where: {
        email: email
      },
      data: {
        resetToken,
        resetTokenExpiry
      }
    }); // Email reset token

    return Object(_mail__WEBPACK_IMPORTED_MODULE_6__["sendTransactionalEmail"])({
      to: user.email,
      from: 'no-reply@4-playersofcolorado.org',
      subject: 'Your 4-Players Password Reset',
      text: `
        ${user.firstName},

        Your password reset token for user "${user.username}" is here!

        Visit this URL to reset your password:
        ${process.env.FRONTEND_URL}/forgot-password?token=${resetToken}
      `,
      html: `
        Your password reset token for user "${user.username}" is here!
        <a href="${process.env.FRONTEND_URL}/forgot-password?token=${resetToken}">Click here to reset your password</a>
      `
    }).then(() => ({
      message: 'Password reset is en route'
    })).catch(err => {
      //Extract error msg
      // const { message, code, response } = err;
      //Extract response msg
      // const { headers, body } = response;
      throw new Error(err.toString());
    });
  },

  async resetPassword(parent, args, ctx, info) {
    // Check if passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error('Passwords do not match');
    } // Check if token is legit and not expired


    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - _utils__WEBPACK_IMPORTED_MODULE_7__["resetTokenTimeoutInMs"]
      }
    });

    if (!user) {
      throw new Error('Token invalid or expired');
    } // Hash the new password


    const password = await getHash(args.password); // Save the new password to the User, remove old reset token fields

    const updatedUser = await ctx.db.mutation.updateUser({
      where: {
        email: user.email
      },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    }); // Generate JWT

    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({
      userId: updatedUser.id
    }, String(process.env.JWT_SECRET)); // Set JWT cookie

    ctx.res.cookie('token', token, tokenSettings); // Return the new user

    return updatedUser;
  },

  async changePassword(parent, args, ctx, info) {
    const {
      user,
      userId
    } = ctx.req;

    if (!userId) {
      throw new Error('User must be logged in');
    } // Check if passwords match


    if (args.password !== args.confirmPassword) {
      throw new Error('Passwords do not match');
    } // Hash the new password


    const password = await getHash(args.password); // Save the new password to the User, remove old reset token fields

    const updatedUser = await ctx.db.mutation.updateUser({
      where: {
        email: user.email
      },
      data: {
        password
      }
    }); // // Generate JWT
    // const token = jwt.sign({ userId: updatedUser.id }, process.env.JWT_SECRET);
    // // Set JWT cookie
    // ctx.res.cookie('token', token, tokenSettings);

    return {
      message: 'Your password has been changed'
    };
  },

  async changeEmail(parent, args, ctx, info) {
    const {
      userId
    } = ctx.req;
    const email = args.email.toLowerCase();

    if (!userId) {
      throw new Error('User must be logged in');
    } // Save the new password to the User, remove old reset token fields


    await ctx.db.mutation.updateUser({
      where: {
        id: userId
      },
      data: {
        email
      }
    });
    return {
      message: 'Your email has been changed'
    };
  },

  async updateRole(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Query the current user


    const currentUser = await ctx.db.query.user({
      where: {
        id: ctx.req.userId
      }
    }, info); // Have proper roles to do this?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(currentUser, ['ADMIN']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // Update role

    try {
      return ctx.db.mutation.updateUser({
        data: {
          role: args.role,
          membershipLog: {
            create: [{
              time: new Date(),
              message: `Role changed to "${args.role}" by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
              messageCode: 'ACCOUNT_CHANGED',
              logger: {
                connect: {
                  id: ctx.req.userId
                }
              }
            }]
          }
        },
        where: {
          id: args.userId
        }
      }, info);
    } catch (e) {
      throw new Error('');
    }
  },

  async updateAccountType(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // Changing account type to 'FULL', add membership log

    const logs = [{
      time: new Date(),
      message: `Account type changed to "${args.accountType}" by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
      messageCode: 'ACCOUNT_CHANGED',
      logger: {
        connect: {
          id: ctx.req.userId
        }
      }
    }]; // Update account type

    return ctx.db.mutation.updateUser({
      data: {
        accountType: args.accountType,
        membershipLog: {
          create: logs
        }
      },
      where: {
        id: args.userId
      }
    }, info);
  },

  async updateAccountStatus(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // Query the current user

    const currentUser = await ctx.db.query.user({
      where: {
        id: args.userId
      }
    }, '{ accountStatus }'); // Add membership log

    const logs = [{
      time: new Date(),
      message: `Account status changed to "${args.accountStatus}" by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
      messageCode: 'ACCOUNT_CHANGED',
      logger: {
        connect: {
          id: ctx.req.userId
        }
      }
    }]; // Account unlocked

    if (currentUser.accountStatus === 'LOCKED' && args.data.accountStatus !== 'LOCKED') {
      logs.push({
        time: new Date(),
        message: `Account unlocked by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
        messageCode: 'ACCOUNT_UNLOCKED',
        logger: {
          connect: {
            id: ctx.req.userId
          }
        }
      });
    } // Update status


    return ctx.db.mutation.updateUser({
      data: {
        accountStatus: args.accountStatus,
        membershipLog: {
          create: logs
        }
      },
      where: {
        id: args.userId
      }
    }, info);
  },

  async updateOffice(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper account status to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const {
      office: existingOffice
    } = await ctx.db.query.user({
      where: {
        id: args.userId
      }
    }, '{ office }');

    if (existingOffice === args.office) {
      throw new Error('Cannot change office to the same office');
    }

    const defaultLog = {
      time: new Date(),
      logger: {
        connect: {
          id: ctx.req.userId
        }
      }
    };
    const logs = []; // Add new value

    if (existingOffice === null && typeof args.office === 'string') {
      logs.push({
        message: `"${args.office}" office added by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
        messageCode: 'OFFICE_ADDED'
      });
    } // Removing old value
    else if (typeof existingOffice === 'string' && args.office === null) {
        logs.push({
          message: `"${existingOffice}" office removed by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
          messageCode: 'OFFICE_REMOVED'
        });
      } // Replacing old value
      else if (existingOffice !== args.office) {
          logs.push({
            message: `"${existingOffice}" office removed by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
            messageCode: 'OFFICE_REMOVED'
          }, {
            message: `"${args.office}" office added by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
            messageCode: 'OFFICE_ADDED'
          });
        }

    const messageLogs = logs.map(log => _objectSpread({}, log, {}, defaultLog)); // Update office

    return ctx.db.mutation.updateUser({
      data: {
        office: args.office === 'NONE' ? null : args.office,
        membershipLog: {
          create: messageLogs
        }
      },
      where: {
        id: args.userId
      }
    }, info);
  },

  async updateTitle(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const {
      title: existingTitle
    } = await ctx.db.query.user({
      where: {
        id: args.userId
      }
    }, '{ title }');

    if (existingTitle === args.title) {
      throw new Error('Cannot change title to the same title');
    }

    const defaultLog = {
      time: new Date(),
      logger: {
        connect: {
          id: ctx.req.userId
        }
      }
    };
    const logs = []; // Add new value

    if (existingTitle === null && typeof args.title === 'string') {
      logs.push({
        message: `"${args.title}" title added by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
        messageCode: 'TITLE_ADDED'
      });
    } // Removing old value
    else if (typeof existingTitle === 'string' && args.title === null) {
        logs.push({
          message: `"${existingTitle}" title removed by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
          messageCode: 'TITLE_REMOVED'
        });
      } // Replacing old value
      else if (existingTitle !== args.title) {
          logs.push({
            message: `"${existingTitle}" title removed by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
            messageCode: 'TITLE_REMOVED'
          }, {
            message: `"${args.title}" title added by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
            messageCode: 'TITLE_ADDED'
          });
        }

    const messageLogs = logs.map(log => _objectSpread({}, log, {}, defaultLog, {
      time: new Date()
    })); // Update title

    return ctx.db.mutation.updateUser({
      data: {
        title: args.title,
        membershipLog: {
          create: messageLogs
        }
      },
      where: {
        id: args.userId
      }
    }, info);
  },

  async createEvent(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER', 'RUN_MASTER']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const {
      event
    } = args;
    const attendees = [{
      member: {
        connect: {
          username: event.host
        }
      },
      status: 'GOING'
    }];
    const data = {
      type: event.type,
      title: event.title,
      description: event.description || '',
      startTime: new Date(event.startTime),
      endTime: new Date(event.endTime),
      address: event.address || '',
      trailDifficulty: event.trailDifficulty || '',
      // trailNotes: event.trailNotes,
      rallyAddress: event.rallyAddress || '',
      rallyTime: event.rallyTime || '',
      membersOnly: false,
      // TODO
      creator: {
        connect: {
          id: ctx.req.userId
        }
      },
      host: {
        connect: {
          username: event.host
        }
      },
      rsvps: {
        create: attendees
      }
    };

    if (event.trail !== '0') {
      data.trail = {
        connect: {
          id: event.trail
        }
      };
    }

    const results = await ctx.db.mutation.createEvent({
      data
    }, info);
    return {
      message: 'Your event has been created'
    };
  },

  async updateEvent(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER', 'RUN_MASTER']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const {
      event,
      id: eventId
    } = args; // Get current event for later comparison

    const existingEvent = await ctx.db.query.event({
      where: {
        id: eventId
      }
    }, info);
    const data = {
      title: event.title,
      description: event.description || '',
      startTime: new Date(event.startTime),
      endTime: new Date(event.endTime),
      address: event.address || '',
      trailDifficulty: event.trailDifficulty || '',
      // trailNotes: event.trailNotes,
      rallyAddress: event.rallyAddress || '',
      rallyTime: event.rallyTime || '',
      membersOnly: false,
      // TODO
      creator: {
        connect: {
          id: ctx.req.userId
        }
      },
      host: {
        connect: {
          username: event.host
        }
      }
    };

    if (event.trail && event.trail !== '0') {
      // New trail submitted
      data.trail = {
        connect: {
          id: event.trail
        }
      };
    } else if (existingEvent.trail && existingEvent.trail.id && !event.trail) {
      // Remove old trail
      data.trail = {
        disconnect: true
      };
    }

    if (event.newFeaturedImage) {
      // New featured image submitted
      data.featuredImage = {
        upsert: {
          create: _objectSpread({}, event.newFeaturedImage),
          update: _objectSpread({}, event.newFeaturedImage)
        }
      };
    } else if (existingEvent.featuredImage && existingEvent.featuredImage.publicId && !event.newFeaturedImage) {
      // Remove old featured image
      data.featuredImage = {
        delete: true
      };
    }

    const results = await ctx.db.mutation.updateEvent({
      data,
      where: {
        id: eventId
      }
    }, info);
    return {
      message: 'Your event has been updated'
    };
  },

  async setRSVP(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    }

    const {
      rsvp
    } = args; // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // Requesting user has proper role?

    if (ctx.req.userId !== rsvp.userId) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER']);
    } // Query the current user


    const currentUser = await ctx.db.query.user({
      where: {
        id: rsvp.userId
      }
    }, '{ id, eventsRSVPd { id, status, event { id } } }');

    if (!currentUser) {
      throw new Error('User does not have permission');
    } // Has this user already RSVPd?


    const userRSVP = currentUser.eventsRSVPd.find(eventRSVP => eventRSVP.event.id === rsvp.eventId); // If this RSVP is not different, return gracefully

    if (userRSVP && userRSVP.status === rsvp.status) {
      return {
        message: 'Already RSVPd, no change recorded'
      };
    } // If this RSVP is different, update RSVP


    if (userRSVP && userRSVP.status !== rsvp.status) {
      await ctx.db.mutation.updateRSVP({
        where: {
          id: userRSVP.id
        },
        data: {
          status: rsvp.status
        }
      }, info);
      return {
        message: 'Thank you for updating your RSVP'
      };
    } // If RSVP is missing, record RSVP


    await ctx.db.mutation.createRSVP({
      data: {
        status: rsvp.status,
        member: {
          connect: {
            id: rsvp.userId
          }
        },
        event: {
          connect: {
            id: rsvp.eventId
          }
        }
      }
    }, info);
    return {
      message: 'Thank you for RSVPing'
    };
  },

  async sendMessage(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Requesting user has proper account status?


    const {
      user
    } = ctx.req;
    const {
      to,
      subject,
      htmlText
    } = args;

    if (to.length === 0) {
      throw new Error('No recipients found');
    } // Can email ALL users


    if (to.includes('all_users')) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(user, ['ADMIN']);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(user, ['ACTIVE']);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountType"])(user, ['FULL']);
    } // Can email guests or full members


    if (to.includes('guests') || to.includes('all_active') || to.includes('full_membership')) {
      // Is active full member and at least an officer
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(user, ['ADMIN', 'OFFICER']);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(user, ['ACTIVE']);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountType"])(user, ['FULL']);
    } // Can email run leaders


    if (to.includes('run_leaders')) {
      // Is active full member and at least the Run Master
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(user, ['ADMIN', 'OFFICER', 'RUN_MASTER']);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(user, ['ACTIVE']);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountType"])(user, ['FULL']);
    } // Can email multiple individual members


    if ((!to.includes('officers') || !to.includes('webmaster')) && // !to.some((subject: string): boolean => subject === emailGroups) &&
    to.length > 1) {
      // Is active full or emeritus and at least a run leader
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(user, _config__WEBPACK_IMPORTED_MODULE_8__["roles"].filter(role => role !== 'USER'));
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(user, ['ACTIVE']);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountType"])(user, ['FULL', 'EMERITUS']);
    } // Can email individual members


    if (!to.includes('officers') || !to.includes('webmaster') // !to.some((subject) => subject === emailGroups)
    ) {
        // Is active full or emeritus
        Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(user, ['ACTIVE']);
        Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountType"])(user, ['FULL', 'EMERITUS', 'ASSOCIATE']);
      } // Can email Run Master


    if (to.includes('runmaster')) {
      // Is active member
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(user, ['ACTIVE']);
    } // Anyone logged in can email the officers or the webmaster


    const emailSettings = {
      from: user.email,
      subject: `[4-Players] ${subject || `Message from ${user.firstName}`}`,
      // text,
      html: htmlText
    };

    if (to.length === 1 && !_config__WEBPACK_IMPORTED_MODULE_8__["emailGroups"].some(recipient => recipient === to[0])) {
      // Send email to one person
      const email = await ctx.db.query.user({
        where: {
          username: to[0]
        }
      }, '{ email }');
      emailSettings.to = [email];
    } else {
      // Send email to many people
      // To do: email permissions
      const peopleQueries = to.filter(recipient => !_config__WEBPACK_IMPORTED_MODULE_8__["emailGroups"].includes(recipient)).map(person => ({
        username: person
      }));
      const groupQueries = to.filter(recipient => _config__WEBPACK_IMPORTED_MODULE_8__["emailGroups"].includes(recipient)).map(group => {
        switch (group) {
          case 'officers':
            return {
              NOT: {
                office: null
              }
            };

          case 'runmaster':
            return {
              role: 'RUN_MASTER'
            };

          case 'webmaster':
            return {
              title: 'WEBMASTER'
            };

          case 'run_leaders':
            return {
              role: 'RUN_LEADER'
            };

          case 'full_membership':
            return {
              AND: [{
                OR: [{
                  accountType: 'FULL'
                }, {
                  accountType: 'EMITERUS'
                }, {
                  accountType: 'ASSOCIATE'
                }]
              }, {
                accountStatus: 'ACTIVE'
              }]
            };

          case 'all_active':
            return {
              accountStatus: 'ACTIVE'
            };

          case 'all_users':
            return {
              NOT: {
                email: null
              }
            };

          default:
            // guests
            return {
              AND: [{
                accountType: 'GUEST'
              }, {
                accountStatus: 'ACTIVE'
              }]
            };
        }
      }); // To do: handle duplicates, if any

      let query = {
        where: {
          OR: peopleQueries
        }
      };

      if (groupQueries.length) {
        query = {
          where: {
            OR: [...query.where['OR'], ...groupQueries]
          }
        };
      }

      const emails = await ctx.db.query.users(query, '{ email }');

      if (emails && emails.length > 1) {
        emailSettings.to = 'info@4-playersofcolorado.org';
        emailSettings.bcc = emails.map(email => email.email);
      } else {
        emailSettings.to = user.email;
      }
    }

    if (emailSettings.to.length >= 1) {
      return Object(_mail__WEBPACK_IMPORTED_MODULE_6__["sendTransactionalEmail"])(emailSettings).then(() => ({
        message: 'Message has been sent'
      })).catch(err => {
        throw new Error(err.toString());
      });
    }

    throw new Error('No email addresses found for recipient(s)');
  },

  async updateUserProfileSettings(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER'], false) || Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isSelf"])(ctx.req.user, args.id, false)) {
      // Query the current user
      const currentUser = await ctx.db.query.user({
        where: {
          id: args.id
        }
      }, '{ accountType, accountStatus, role, joined }');
      const logs = []; // Became a full member

      if (currentUser.accountType === 'FULL' && typeof args.data.joined === 'string' && currentUser.joined === null) {
        logs.push({
          time: new Date(),
          message: 'Became a Full Member',
          messageCode: 'MEMBERSHIP_GRANTED',
          logger: {
            connect: {
              id: ctx.req.userId
            }
          }
        });
      } // Account unlocked


      if (currentUser.accountStatus === 'LOCKED' && args.data.accountStatus !== 'LOCKED') {
        logs.push({
          time: new Date(),
          message: `Account unlocked by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
          messageCode: 'ACCOUNT_UNLOCKED',
          logger: {
            connect: {
              id: ctx.req.userId
            }
          }
        });
      } // Account rejected
      // TODO
      // Update user


      const obj = {
        data: {
          firstName: args.data.firstName,
          lastName: args.data.lastName,
          username: args.data.username,
          gender: args.data.gender,
          birthdate: new Date(args.data.birthdate),
          joined: args.data.joined ? new Date(args.data.joined) : null,
          contactInfo: {
            upsert: {
              create: {
                street: args.data.street,
                city: args.data.city,
                state: args.data.state,
                zip: args.data.zip,
                phone: args.data.phone
              },
              update: {
                street: args.data.street,
                city: args.data.city,
                state: args.data.state,
                zip: args.data.zip,
                phone: args.data.phone
              }
            }
          },
          preferences: {
            upsert: {
              create: {
                emergencyContactName: args.data.emergencyContactName,
                emergencyContactPhone: args.data.emergencyContactPhone,
                showPhoneNumber: args.data.showPhoneNumber
              },
              update: {
                emergencyContactName: args.data.emergencyContactName,
                emergencyContactPhone: args.data.emergencyContactPhone,
                showPhoneNumber: args.data.showPhoneNumber
              }
            }
          },
          membershipLog: {
            create: logs
          }
        },
        where: {
          id: args.id
        }
      };
      const results = await ctx.db.mutation.updateUser(obj, info);

      if (false) {}

      return {
        message: 'User profile settings updated'
      };
    } else {
      throw new Error('User profile can only be updated by the user, an admin, or an officer');
    }
  },

  async updateUserAdminProfileSettings(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER'], false)) {
      throw new Error('User profile can only be updated by an admin or an officer');
    } // Requesting user has proper account status?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const {
      data
    } = args; // Query the current user

    const currentUser = await ctx.db.query.user({
      where: {
        id: args.id
      }
    }, '{ id, accountType, accountStatus, role, office, title }'); // Logs

    const defaultLog = {
      time: new Date(),
      logger: {
        connect: {
          id: ctx.req.userId
        }
      }
    };
    const logs = []; // Add new title

    if (currentUser.title === null && typeof data.title === 'string') {
      logs.push({
        message: `"${data.title}" title added by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
        messageCode: 'TITLE_ADDED'
      });
    } // Removing old title
    else if (typeof currentUser.title === 'string' && data.title === null) {
        logs.push({
          message: `"${currentUser.title}" title removed by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
          messageCode: 'TITLE_REMOVED'
        });
      } // Replace title
      else if (typeof currentUser.title === 'string' && typeof data.title === 'string' && currentUser.title !== data.title) {
          logs.push({
            message: `"${currentUser.title}" title removed by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
            messageCode: 'TITLE_REMOVED'
          }, {
            message: `"${data.title}" title added by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
            messageCode: 'TITLE_ADDED'
          });
        } // Add new office


    if (currentUser.office === null && typeof data.office === 'string') {
      logs.push({
        message: `"${data.office}" office added by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
        messageCode: 'OFFICE_ADDED'
      });
    } // Removing old office
    else if (typeof currentUser.office === 'string' && data.office === null) {
        logs.push({
          message: `"${currentUser.office}" office removed by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
          messageCode: 'OFFICE_REMOVED'
        });
      } // Replace office
      else if (typeof currentUser.office === 'string' && typeof data.office === 'string' && currentUser.office !== data.office) {
          logs.push({
            message: `"${currentUser.office}" office removed by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
            messageCode: 'OFFICE_REMOVED'
          }, {
            message: `"${data.office}" office added by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
            messageCode: 'OFFICE_ADDED'
          });
        }

    if (currentUser.role !== data.role) {
      logs.push({
        message: `Role changed to "${data.role}" by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
        messageCode: 'ACCOUNT_CHANGED'
      });
    }

    if (currentUser.accountStatus !== data.accountStatus) {
      logs.push({
        message: `Account status changed to "${data.accountStatus}" by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
        messageCode: 'ACCOUNT_CHANGED'
      });
    }

    if (currentUser.accountType !== data.accountType) {
      logs.push({
        message: `Account type changed to "${data.accountType}" by ${ctx.req.user.firstName} ${ctx.req.user.lastName}`,
        messageCode: 'ACCOUNT_CHANGED'
      });
    }

    const messageLogs = logs.map(log => _objectSpread({}, log, {}, defaultLog)); // Update user

    await ctx.db.mutation.updateUser({
      data: _objectSpread({}, data, {}, messageLogs.length > 0 ? {
        membershipLog: {
          create: messageLogs
        }
      } : {}),
      where: {
        id: args.id
      }
    }, info);

    if (false) {}

    return {
      message: 'User profile settings updated'
    };
  },

  async updateAvatar(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    }

    const {
      data
    } = args;
    const {
      old: oldAvatar,
      new: newAvatar
    } = data;

    if (oldAvatar) {
      // Delete old image via Cloudinary API
      const formData = {
        api_key: process.env.CLOUDINARY_KEY,
        public_id: oldAvatar.publicId
      };

      try {
        await node_fetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.cloudinary.com/v1_1/fourplayers/image/destroy', {
          method: 'POST',
          body: formData
        });
      } catch (e) {
        console.error(e);
        throw new Error('Unable to remove old avatar');
      }
    } // Update user


    const obj = {
      data: {
        avatar: {
          upsert: {
            create: {
              publicId: newAvatar.publicId,
              url: newAvatar.url,
              smallUrl: newAvatar.smallUrl
            },
            update: {
              publicId: newAvatar.publicId,
              url: newAvatar.url,
              smallUrl: newAvatar.smallUrl
            }
          }
        }
      },
      where: {
        id: ctx.req.userId
      }
    };
    const results = await ctx.db.mutation.updateUser(obj, info);
    await ctx.db.mutation.createActivityLogItem({
      data: {
        time: new Date(),
        message: `Added a new profile photo`,
        messageCode: 'PROFILE_PHOTO_SUBMITTED',
        link: `/profile/${ctx.req.user.username}`,
        user: {
          connect: {
            id: ctx.req.userId
          }
        }
      }
    }); // TODO error handling

    if (false) {}

    return {
      message: 'Avatar updated'
    };
  },

  async deleteAvatar(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    }

    const {
      avatar
    } = args; // Remove from Cloudinary

    try {
      const cloudinaryResults = await promisifiedDestroy(avatar.publicId);

      if (cloudinaryResults && cloudinaryResults.result !== 'ok') {
        throw new Error(cloudinaryResults);
      }
    } catch (e) {
      console.error(e);
      throw new Error('Unable to delete old avatar');
    } // Remove from user


    const obj = {
      data: {
        avatar: {
          delete: true
        }
      },
      where: {
        id: ctx.req.userId
      }
    };
    const results = await ctx.db.mutation.updateUser(obj, info);

    if (false) {}

    return {
      message: 'Avatar deleted'
    };
  },

  async updateRig(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    }

    const {
      data
    } = args;
    const {
      old,
      new: newRig
    } = data; // Remove from Cloudinary

    if (old) {
      try {
        const cloudinaryResults = await promisifiedDestroy(old.publicId);

        if (cloudinaryResults.result !== 'ok') {
          throw new Error('Unable to delete old rig image from cloudinary');
        }
      } catch (e) {
        console.error(e);
        throw new Error('Unable to delete old rig image from database');
      }
    } // Update user


    const obj = {
      data: {
        rig: {
          upsert: {
            create: {
              image: {
                create: {
                  publicId: newRig.publicId,
                  url: newRig.url,
                  smallUrl: newRig.smallUrl
                }
              }
            },
            update: {
              image: {
                upsert: {
                  create: {
                    publicId: newRig.publicId,
                    url: newRig.url,
                    smallUrl: newRig.smallUrl
                  },
                  update: {
                    publicId: newRig.publicId,
                    url: newRig.url,
                    smallUrl: newRig.smallUrl
                  }
                }
              }
            }
          }
        }
      },
      where: {
        id: ctx.req.userId
      }
    };
    const results = await ctx.db.mutation.updateUser(obj, info);
    await ctx.db.mutation.createActivityLogItem({
      data: {
        time: new Date(),
        message: `Added a new rigbook photo`,
        messageCode: 'RIGBOOK_PHOTO_SUBMITTED',
        link: `/profile/${ctx.req.user.username}`,
        user: {
          connect: {
            id: ctx.req.userId
          }
        }
      }
    }); // TODO error handling

    if (false) {}

    return {
      message: 'Rig image updated'
    };
  },

  async deleteRig(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    }

    const {
      rig
    } = args; // Remove from Cloudinary

    try {
      const cloudinaryResults = await promisifiedDestroy(rig.publicId);

      if (cloudinaryResults && cloudinaryResults.result !== 'ok') {
        throw new Error(cloudinaryResults);
      }
    } catch (e) {
      console.error(e);
      throw new Error('Unable to delete old rig image');
    } // Remove from user


    const obj = {
      data: {
        rig: {
          delete: true
        }
      },
      where: {
        id: ctx.req.userId
      }
    };
    const results = await ctx.db.mutation.updateUser(obj, info);

    if (false) {}

    return {
      message: 'Rig image deleted'
    };
  },

  async updateVehicle(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Requesting user has proper account status?
    // hasAccountStatus(ctx.req.user, ["ACTIVE"]);


    const {
      vehicle,
      id: vehicleId
    } = args;

    const {
      outfitLevel,
      mods
    } = vehicle,
          restVehicle = _objectWithoutProperties(vehicle, ["outfitLevel", "mods"]);

    const data = {
      vehicle: {
        upsert: {
          create: _objectSpread({
            outfitLevel: outfitLevel && outfitLevel != 0 ? outfitLevel : null,
            mods: {
              set: mods || []
            }
          }, restVehicle),
          update: _objectSpread({
            outfitLevel: outfitLevel && outfitLevel != 0 ? outfitLevel : null,
            mods: {
              set: mods || []
            }
          }, restVehicle)
        }
      }
    };
    const results = await ctx.db.mutation.updateUser({
      data,
      where: {
        id: ctx.req.userId
      }
    }, info);
    return {
      message: 'Your vehicle has been updated'
    };
  },

  async submitElection(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const {
      election
    } = args; // Format races

    const races = election.races.map(race => {
      race.candidates = {
        connect: race.candidates
      };
      return race;
    }); // Update election

    return ctx.db.mutation.createElection({
      data: {
        electionName: election.electionName,
        startTime: election.startTime,
        endTime: election.endTime,
        // 1 week default
        races: {
          create: races
        }
      }
    }, info);
  },

  async submitVote(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Requesting user has proper account type?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountType"])(ctx.req.user, ['FULL']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // Have they voted for this ballot before?

    const {
      vote
    } = args;
    const votes = await ctx.db.query.votes({
      where: {
        AND: [{
          ballot: {
            id: vote.ballot
          }
        }, {
          voter: {
            id: ctx.req.userId
          }
        }]
      }
    }, info);

    if (votes.length > 0) {
      throw new Error('User has voted already');
    }

    const data = {
      dateTime: new Date(vote.dateTime),
      ballot: {
        connect: {
          id: vote.ballot
        }
      },
      voter: {
        connect: {
          id: ctx.req.userId
        }
      }
    };

    if (vote.candidate) {
      data.candidate = {
        connect: {
          id: vote.candidate
        }
      };
    } // Record vote


    await ctx.db.mutation.createVote({
      data
    });
    return {
      message: 'Thank you for voting'
    };
  },

  async createTrail(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER', 'RUN_MASTER']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const {
      trail
    } = args;

    const {
      featuredImage,
      newFeaturedImage
    } = trail,
          filteredTrail = _objectWithoutProperties(trail, ["featuredImage", "newFeaturedImage"]);

    let data = _objectSpread({}, filteredTrail);

    if (newFeaturedImage) {
      // New featured image submitted
      data.featuredImage = {
        create: _objectSpread({}, newFeaturedImage)
      };
    }

    const results = await ctx.db.mutation.createTrail({
      data
    }, info);
    return {
      message: 'Your trail has been created'
    };
  },

  async updateTrail(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('User must be logged in');
    } // Have proper roles to do this?


    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER', 'RUN_MASTER']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const {
      trail,
      id: trailId
    } = args;

    const {
      newFeaturedImage,
      featuredImage
    } = trail,
          filteredTrail = _objectWithoutProperties(trail, ["newFeaturedImage", "featuredImage"]); // Get current trail for later comparison


    const existingTrail = await ctx.db.query.trail({
      where: {
        id: trailId
      }
    }, info);

    let data = _objectSpread({}, filteredTrail);

    if (newFeaturedImage) {
      // New featured image submitted
      data.featuredImage = {
        upsert: {
          create: _objectSpread({}, newFeaturedImage),
          update: _objectSpread({}, newFeaturedImage)
        }
      };
    } else if (existingTrail.featuredImage && existingTrail.featuredImage.publicId && !newFeaturedImage) {
      // Remove old featured image
      data.featuredImage = {
        delete: true
      };
    }

    const results = await ctx.db.mutation.updateTrail({
      data,
      where: {
        id: trailId
      }
    }, info);
    return {
      message: 'Your trail has been updated'
    };
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Mutations);

/***/ }),

/***/ "./bundle/resolvers/Query.ts":
/*!***********************************!*\
  !*** ./bundle/resolvers/Query.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./bundle/utils/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./bundle/config.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { addFragmentToInfo } from 'graphql-binding';


const Query = {
  async myself(parent, args, ctx, info) {
    console.log('INFO', info); // Check if there is a current user

    if (!ctx.req.userId) {
      return null;
    } // const result = await db
    //   .select()
    //   .from('users')
    //   .where('user_id', ctx.req.userId);
    // console.log(usersFromDb(result));
    // return [];
    // return usersFromDb(result);


    return ctx.db.user({
      where: {
        id: ctx.req.userId
      }
    }).$fragment(info);
  },

  async users(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account type?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL', 'ASSOCIATE', 'EMERITUS']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // If they do, query all the users

    const query = {
      orderBy: 'firstName_ASC',
      where: {}
    };

    if (args.role && args.role.length) {
      query.where = {
        role_in: args.role
      };
    }

    if (args.accountStatus && args.accountStatus.length) {
      query.where = _objectSpread(_objectSpread({}, query.where), {}, {
        accountStatus_in: args.accountStatus
      });
    }

    if (args.accountType && args.accountType.length) {
      query.where = _objectSpread(_objectSpread({}, query.where), {}, {
        accountType_in: args.accountType
      });
    }

    if (args.office && args.office.length) {
      query.where = _objectSpread(_objectSpread({}, query.where), {}, {
        office_in: args.office
      });
    }

    if (args.title && args.title.length) {
      query.where = _objectSpread(_objectSpread({}, query.where), {}, {
        title_in: args.title
      }); // query.where = {
      //   AND: [
      //     { accountType_in: args.accountType, },
      //     { accountStatus_in: args.accountStatus, },
      //     { role_in: args.role, },
      //     { office_in: args.office, },
      //     { title_in: args.title, },
      //   ],
      // };
    } // Sorting?
    // if (args.orderBy && args.orderBy.length > 0) {
    //   query.orderBy = args.orderBy[0];
    // }


    const results = await ctx.db.query.users(query, info);
    results.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
    return results;
  },

  async user(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    }

    if (args.username && args.username !== ctx.req.user.username) {
      // Requesting user has proper account type?
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL', 'ASSOCIATE', 'EMERITUS']); // Requesting user has proper account status?

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    } // If they do, query the user


    if (args.username && args.username !== 'self') {
      const user = await ctx.db.query.user({
        where: {
          username: args.username
        }
      }, info);

      if (user) {
        return user;
      } else {
        throw new Error('User cannot be found');
      }
    }

    return ctx.db.query.user({
      where: {
        id: ctx.req.userId
      }
    }, info);
  },

  async getRegistration(parent, args, ctx, info) {
    const registration = await ctx.db.query.registrations({
      where: {
        token: args.token,
        tokenExpiry_gte: Date.now() - _utils__WEBPACK_IMPORTED_MODULE_0__["resetTokenTimeoutInMs"]
      },
      first: 1
    }, info);

    if (!registration) {
      throw new Error('Token invalid or expired, please register again.');
    }

    if (registration.length <= 0) {
      throw new Error('Registration invalid, please register again.');
    }

    return registration[0];
  },

  async getDuesLastReceived(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper role?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER']); // Requesting user has proper account type?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const userQuery = args.username === 'self' ? {
      id: ctx.req.userId
    } : {
      username: args.username
    }; // If they do, query the user

    const results = await ctx.db.query.membershipLogItems({
      where: {
        AND: [{
          user: userQuery
        }, {
          messageCode: 'DUES_PAID'
        }]
      },
      orderBy: 'createdAt_DESC',
      first: 1
    }, info);
    return {
      time: results.length > 0 ? results[0].time : null
    };
  },

  async getOfficer(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account type?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL', 'ASSOCIATE', 'EMERITUS']); // // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // If they do, query the officer

    const results = await ctx.db.query.users({
      where: {
        office: args.office
      }
    }, info);
    return results.length > 0 ? results[0] : {};
  },

  async getMembers(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account type?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL', 'ASSOCIATE', 'EMERITUS']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // If they do, query all the members

    const results = await ctx.db.query.users({
      where: {
        AND: [{
          accountStatus: 'ACTIVE'
        }, {
          accountType_in: args.accountTypes
        }, {
          office: null
        } // No officers
        ]
      },
      orderBy: 'firstName_ASC'
    }, info); // Sort by lastName then firstName

    results.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
    return results;
  },

  async getRunLeaders(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper role?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER', 'RUN_MASTER']); // Requesting user has proper account type?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // Return all run leaders

    const results = await ctx.db.query.users({
      where: {
        AND: [{
          accountStatus: 'ACTIVE'
        }, {
          accountType: 'FULL'
        }, {
          role_in: ['ADMIN', 'OFFICER', 'RUN_MASTER', 'RUN_LEADER']
        }]
      },
      orderBy: 'firstName_ASC'
    }, info); // Sort by lastName then firstName

    results.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
    return results;
  },

  async getMessageRecipients(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    }

    const {
      user
    } = ctx.req;
    const members = ['FULL', 'ASSOCIATE', 'EMERITUS'];
    const query = {
      where: {},
      orderBy: 'firstName_ASC'
    };

    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(user, ['ACTIVE'], false)) {
      return [];
    }

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasRole"])(user, ['ADMIN', 'OFFICER'], false)) {
      query.where = {
        accountType_in: _config__WEBPACK_IMPORTED_MODULE_1__["accountType"]
      };
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(user, members, false)) {
      query.where = {
        AND: [{
          accountStatus: 'ACTIVE'
        }, {
          accountType_in: members
        }]
      };
    } else {
      return [];
    }

    const results = await ctx.db.query.users(query, info); // Sort by lastName then firstName

    results.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
    return results;
  },

  async getUpcomingEvents(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account status?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    let query = {
      where: {
        startTime_gte: new Date().toISOString()
      },
      orderBy: 'startTime_ASC'
    };

    if (args.count) {
      query.first = args.count;
    } // If they do, query all the users


    return ctx.db.query.events(query, info);
  },

  async getUserEvents(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper role?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER', 'RUN_MASTER']); // Requesting user has proper account type?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const userQuery = args.username === 'self' ? {
      id: ctx.req.userId
    } : {
      username: args.username
    };

    if (args.eventType) {
      return ctx.db.query.events({
        where: {
          AND: [{
            type: args.eventType
          }, {
            startTime_lte: new Date().toISOString()
          }, {
            rsvps_some: {
              member: userQuery
            }
          }]
        },
        orderBy: 'startTime_DESC'
      }, info);
    }

    return ctx.db.query.events({
      where: {
        AND: [{
          startTime_lte: new Date().toISOString()
        }, {
          rsvps_some: {
            member: userQuery
          }
        }]
      },
      orderBy: 'startTime_DESC'
    }, info);
  },

  async getPastEvents(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account status?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // If they do, query all the users

    return ctx.db.query.events({
      where: {
        startTime_lte: new Date().toISOString()
      },
      orderBy: 'startTime_DESC'
    }, info);
  },

  async getEvent(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account status?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const result = await ctx.db.query.event({
      where: {
        id: args.eventId
      }
    }, info);

    if (!result) {
      throw new Error('Event cannot be found');
    }

    return result;
  },

  async getNextEvent(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account status?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);

    try {
      const results = await ctx.db.query.events({
        where: {
          startTime_gte: new Date().toISOString()
        },
        orderBy: 'startTime_ASC',
        first: 1
      }, info);
      return results.length > 0 ? results[0] : null;
    } catch (e) {
      throw new Error(e);
    }
  },

  // async getMyNextEvent(parent: any, args: any, ctx: any, info: any) {
  //   // Logged in?
  //   if (!ctx.req.userId) {
  //     throw new Error("You must be logged in");
  //   }
  //   // Requesting user has proper account status?
  //   hasAccountStatus(ctx.req.user, ["ACTIVE"]);
  //   try {
  //     // const results = await ctx.db.query.user(
  //     //   {
  //     //     where: {
  //     //       startTime_gte: new Date().toISOString(),
  //     //       rsvps_every: {
  //     //         member: {
  //     //           id: ctx.req.userId
  //     //         }
  //     //       }
  //     //     },
  //     //     orderBy: "startTime_ASC",
  //     //     first: 1,
  //     //   },
  //     //   info
  //     // );
  //     const results = await ctx.db.query
  //     console.log(results);
  //     return results.length > 0 ? results[0]: {};
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // },
  async getTrails(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account status?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // If they do, query all the users

    return ctx.db.query.trails({}, info);
  },

  async getTrail(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account status?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER', 'RUN_MASTER', 'RUN_LEADER']);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL']); // If they do, query all the users

    return ctx.db.query.trail({
      where: {
        slug: args.slug
      }
    }, info);
  },

  async electionCandidates(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper role?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // If they do, query all the users

    return ctx.db.query.users({
      where: {
        role_in: args.roles,
        accountStatus: args.accountStatus
      }
    }, info);
  },

  getActiveElections(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account type?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    return ctx.db.query.elections({
      where: {
        AND: [{
          startTime_lte: new Date().toISOString()
        }, {
          endTime_gt: new Date().toISOString()
        }]
      },
      orderBy: 'endTime_ASC'
    }, info);
  },

  getActiveElectionsWithResults(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper role?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    return ctx.db.query.elections({
      where: {
        AND: [{
          startTime_lte: new Date().toISOString()
        }, {
          endTime_gt: new Date().toISOString()
        }]
      },
      orderBy: 'endTime_ASC'
    }, info);
  },

  getElection(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account type?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    return ctx.db.query.election({
      where: {
        id: args.id
      }
    }, info);
  },

  async getUserVote(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account type?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL']); // Requesting user has proper account status?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']);
    const votes = await ctx.db.query.votes({
      where: {
        AND: [{
          ballot: {
            id: args.ballot
          }
        }, {
          voter: {
            id: ctx.req.userId
          }
        }]
      },
      first: true
    }, info);
    return votes;
  },

  // async adminStats(parent: any, args: any, ctx: any, info: any) {
  //   // Logged in?
  //   if (!ctx.req.userId) {
  //     throw new Error("You must be logged in");
  //   }
  //   // Requesting user has proper role?
  //   hasRole(ctx.req.user, ["ADMIN", "OFFICER", "RUN_MASTER"]);
  //   // Requesting user has proper account type?
  //   hasAccountType(ctx.req.user, ["FULL"]);
  //   // Requesting user has proper account status?
  //   hasAccountStatus(ctx.req.user, ["ACTIVE"]);
  //   return ctx.db.query.votes(
  //     {
  //       where: {
  //         AND: [
  //           { ballot: { id: args.ballot } },
  //           { voter: { id: ctx.req.userId } }
  //         ]
  //       },
  //       first: true
  //     },
  //     info
  //   );
  //   const [
  //     activeFullMembers,
  //     pastDueFullMembers,
  //     delinquentFullMembers,
  //     removedFullMembers,
  //     resignedFullMembers,
  //     inactiveFullMembers,
  //     limitedGuestMembers,
  //     lockedGuestMembers,
  //     emeritusMembers,
  //     deceasedMembers,
  //     associateMembers,
  //     guestMembers,
  //     charterMembers,
  //     fullMembersLastYear,
  //     newFullMembersThisYear,
  //     neededForQuorum,
  //     neededToPassMotion,
  //     neededToVoteOnNewMember,
  //     newFullMembersAllowed,
  //     fullMembersAllowed
  //   ] = Promise.all([
  //     ctx.db.query.usersConnection(
  //       {
  //         where: {}
  //       },
  //       info
  //     )
  //   ]);
  //   const results = {};
  //   return {
  //     activeFullMembers,
  //     pastDueFullMembers,
  //     delinquentFullMembers,
  //     removedFullMembers,
  //     resignedFullMembers,
  //     inactiveFullMembers,
  //     limitedGuestMembers,
  //     lockedGuestMembers,
  //     emeritusMembers,
  //     deceasedMembers,
  //     associateMembers,
  //     guestMembers,
  //     charterMembers,
  //     fullMembersLastYear,
  //     newFullMembersThisYear,
  //     neededForQuorum,
  //     neededToPassMotion,
  //     neededToVoteOnNewMember,
  //     newFullMembersAllowed,
  //     fullMembersAllowed
  //   };
  // },
  // async activeMembersPerYear(parent: any, args: any, ctx: any, info: any) {
  //   // Logged in?
  //   if (!ctx.req.userId) {
  //     throw new Error("You must be logged in");
  //   }
  //   hasRole(ctx.req.user, ["ADMIN", "OFFICER", "RUN_MASTER"]);
  //   // Requesting user has proper account type?
  //   hasAccountType(ctx.req.user, ["FULL"]);
  //   // Requesting user has proper account status?
  //   hasAccountStatus(ctx.req.user, ["ACTIVE"]);
  //   return ctx.db.query.users(
  //     {
  //       where: {}
  //     },
  //     info
  //   );
  //   return [
  //     {
  //       year,
  //       count
  //     }
  //   ];
  // },
  // async guestsWithLockedAccounts(parent: any, args: any, ctx: any, info: any) {
  //   // Logged in?
  //   if (!ctx.req.userId) {
  //     throw new Error("You must be logged in");
  //   }
  //   hasRole(ctx.req.user, ["ADMIN", "OFFICER", "RUN_MASTER"]);
  //   // Requesting user has proper account type?
  //   hasAccountType(ctx.req.user, ["FULL"]);
  //   // Requesting user has proper account status?
  //   hasAccountStatus(ctx.req.user, ["ACTIVE"]);
  //   return ctx.db.query.users(
  //     {
  //       where: {
  //         AND: [{ accountType: "GUEST" }, { accountStatus: "LOCKED" }]
  //       }
  //     },
  //     info
  //   );
  // },
  // async guestsAskedToJoin(parent: any, args: any, ctx: any, info: any) {
  //   // Logged in?
  //   if (!ctx.req.userId) {
  //     throw new Error("You must be logged in");
  //   }
  //   hasRole(ctx.req.user, ["ADMIN", "OFFICER", "RUN_MASTER"]);
  //   // Requesting user has proper account type?
  //   hasAccountType(ctx.req.user, ["FULL"]);
  //   // Requesting user has proper account status?
  //   hasAccountStatus(ctx.req.user, ["ACTIVE"]);
  //   return ctx.db.query.users(
  //     {
  //       where: {
  //         AND: [{ accountType: "GUEST" }, { accountStatus: "LIMITED" }]
  //       }
  //     },
  //     info
  //   );
  // },
  // async guestsEligibleForMembership(parent: any, args: any, ctx: any, info: any) {
  //   // Logged in?
  //   if (!ctx.req.userId) {
  //     throw new Error("You must be logged in");
  //   }
  //   hasRole(ctx.req.user, ["ADMIN", "OFFICER", "RUN_MASTER"]);
  //   // Requesting user has proper account type?
  //   hasAccountType(ctx.req.user, ["FULL"]);
  //   // Requesting user has proper account status?
  //   hasAccountStatus(ctx.req.user, ["ACTIVE"]);
  //   // TODO: Has attended 1 run
  //   // TODO: Has attended 1 meeting
  //   const results = ctx.db.query.users({
  //     where: {
  //       AND: [
  //         { accountType: "GUEST" },
  //         { accountStatus: "ACTIVE" },
  //         {
  //           eventsRSVPd_some: {
  //             where: {
  //               type: {}
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   });
  //   // Filter over 18
  //   // Filter at least 1 run
  //   // Filter at least 1 meeting
  // }
  async getMembershipLogItems(parent, args, ctx, info) {
    // Logged in?
    if (!ctx.req.userId) {
      throw new Error('You must be logged in');
    } // Requesting user has proper account type?


    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountType"])(ctx.req.user, ['FULL', 'ASSOCIATE'], false)) {
      return [];
    }

    if (args.username.toLowerCase() === 'self') {
      return ctx.db.query.membershipLogItems({
        where: {
          AND: [{
            messageCode: args.messageCode
          }, {
            user: {
              id: ctx.req.userId
            }
          }]
        },
        orderBy: 'time_DESC'
      }, info);
    } // Requesting user has proper account status?


    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasAccountStatus"])(ctx.req.user, ['ACTIVE']); // Requesting user has proper role?

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasRole"])(ctx.req.user, ['ADMIN', 'OFFICER']);
    return ctx.db.query.membershipLogItems({
      where: {
        AND: [{
          messageCode: args.messageCode
        }, {
          user: {
            username: args.username
          }
        }]
      },
      orderBy: 'time_DESC'
    }, info);
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Query);

/***/ }),

/***/ "./bundle/resolvers/Trail.ts":
/*!***********************************!*\
  !*** ./bundle/resolvers/Trail.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./bundle/utils/index.ts");

const Trail = {
  // Pattern borrowed from playbook:
  // https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-add-a-custom/computed-field-to-a-prisma-model-via-the-application-schema-prisma-bindings
  async avgDifficulty(parent, args, ctx, info) {
    // Get all difficulties from run reports for this trail
    const reports = await ctx.db.query.runReports({
      where: {
        trail: {
          id: parent.id
        }
      }
    }); // Convert to array

    const scale = {
      UNKNOWN: 0,
      BEGINNER: 1,
      INTERMEDIATE: 2,
      ADVANCED: 3
    }; // Determine total

    const counts = reports.reduce((accumulator, report) => scale[report.difficulty] + accumulator, 0);

    if (counts) {
      const avg = Math.round(counts / reports.length);
      const entries = Object.entries(scale); // console.log("entries", entries);

      const avgDifficulty = entries.find(entry => avg === entry[1]);
      return avgDifficulty[0];
    }

    return 'UNKNOWN';
  },

  async avgRatings(parent, args, ctx, info) {
    // Get all ratings from run reports and checkins for this trail, determine average
    // Get all difficulties from run reports for this trail
    const reports = await ctx.db.query.runReports({
      where: {
        trail: {
          id: parent.id
        }
      }
    }); // Determine total

    const counts = reports.reduce((accumulator, report) => report.rating + accumulator, 0);

    if (counts) {
      const avgRatings = (counts / reports.length).toPrecision(3);
      return avgRatings;
    }

    return 0;
  },

  async currentConditions({
    id
  }, args, ctx, info) {
    // Find last condition reported within the last 30 days
    const conditions = await ctx.db.query.conditions({
      where: {
        report: {
          AND: [{
            trail: {
              id
            }
          }, {
            startTime_lte: new Date(Date.now() - _utils__WEBPACK_IMPORTED_MODULE_0__["monthInMs"])
          }]
        }
      },
      first: 1
    });

    if (conditions.length > 0) {
      return conditions[0].status;
    }

    return 'UNKNOWN';
  },

  async conditionsLastReported({
    id
  }, args, ctx, info) {
    // Get count of all people who favorited this trail
    // Find last condition reported within the last 30 days
    const conditions = await ctx.db.query.conditions({
      where: {
        report: {
          AND: [{
            trail: {
              id
            }
          }, {
            startTime_lte: new Date(Date.now() - _utils__WEBPACK_IMPORTED_MODULE_0__["monthInMs"])
          }]
        }
      },
      first: 1
    });

    if (conditions.length > 0) {
      return conditions[0].dateReported;
    }

    return null;
  },

  async favoriteCount({
    id
  }, args, ctx, info) {
    // Get count of all people who favorited this trail
    const reports = await ctx.db.query.runReports({
      where: {
        AND: [{
          trail: {
            id
          }
        }, {
          favorite: true
        }]
      }
    });
    return reports.length;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Trail);

/***/ }),

/***/ "./bundle/schema.ts":
/*!**************************!*\
  !*** ./bundle/schema.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolvers_Mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers/Mutation */ "./bundle/resolvers/Mutation.ts");
/* harmony import */ var _resolvers_Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/Query */ "./bundle/resolvers/Query.ts");
/* harmony import */ var _resolvers_Election__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/Election */ "./bundle/resolvers/Election.ts");
/* harmony import */ var _resolvers_Ballot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/Ballot */ "./bundle/resolvers/Ballot.ts");
/* harmony import */ var _resolvers_Trail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/Trail */ "./bundle/resolvers/Trail.ts");
/* harmony import */ var _type_defs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type-defs */ "./bundle/type-defs.ts");







const schema = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["makeExecutableSchema"])({
  typeDefs: _type_defs__WEBPACK_IMPORTED_MODULE_6__["default"],
  resolvers: {
    Mutation: _resolvers_Mutation__WEBPACK_IMPORTED_MODULE_1__["default"],
    Query: _resolvers_Query__WEBPACK_IMPORTED_MODULE_2__["default"],
    Trail: _resolvers_Trail__WEBPACK_IMPORTED_MODULE_5__["default"],
    Election: _resolvers_Election__WEBPACK_IMPORTED_MODULE_3__["default"],
    Ballot: _resolvers_Ballot__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ }),

/***/ "./bundle/server.ts":
/*!**************************!*\
  !*** ./bundle/server.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./bundle/schema.ts");
/* harmony import */ var _generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generated */ "./bundle/generated/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  schema: _schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  context: req => _objectSpread({}, req, {
    db: _generated__WEBPACK_IMPORTED_MODULE_2__["prisma"]
  })
}));

/***/ }),

/***/ "./bundle/type-defs.ts":
/*!*****************************!*\
  !*** ./bundle/type-defs.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
 // # import * from './generated/prisma.graphql'

const typeDefs = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  scalar DateTime

  enum Role {
    ADMIN
    OFFICER
    RUN_MASTER
    RUN_LEADER
    USER
  }

  enum AccountStatus {
    ACTIVE
    PAST_DUE
    DELINQUENT
    REMOVED
    RESIGNED
    INACTIVE
    LIMITED
    LOCKED
  }

  enum AccountType {
    FULL
    ASSOCIATE
    EMERITUS
    GUEST
  }

  enum Office {
    PRESIDENT
    VICE_PRESIDENT
    SECRETARY
    TREASURER
  }

  enum Title {
    WEBMASTER
    CHARTER_MEMBER
    HISTORIAN
  }

  enum Poll {
    ELECTION
    RUN_SELECTION
  }

  enum TrailDifficulty {
    UNKNOWN
    BEGINNER
    INTERMEDIATE
    ADVANCED
  }

  enum MigrationStatus {
    NEEDED
    IN_PROGRESS
    COMPLETED
  }

  enum RSVPStatus {
    NONE
    CANT_GO
    GOING
    MAYBE
  }

  enum TrailCondition {
    CLEAR
    MINOR_ISSUES
    MAJOR_ISSUES
    CLOSED
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
    UNDISCLOSED
  }

  enum OutfitLevel {
    MODIFIED
    STOCK
  }

  enum ActivityMessageCode {
    EVENT_ATTENDED
    RUN_LEAD
    EVENT_REVIEW_SUBMITTED
    RUN_REPORT_SUBMITTED
    GALLERY_PHOTO_SUBMITTED
    GALLERY_PHOTOS_SUBMITTED
    PROFILE_PHOTO_SUBMITTED
    RIGBOOK_PHOTO_SUBMITTED
    # COMMENTED
    JOINED
  }

  enum MembershipMessageCode {
    ACCOUNT_CREATED
    ACCOUNT_UNLOCKED
    ACCOUNT_CHANGED
    ACCOUNT_REJECTED
    DUES_PAID
    OFFICE_ADDED
    OFFICE_REMOVED
    TITLE_ADDED
    TITLE_REMOVED
    MEMBERSHIP_ELIGIBLE
    MEMBERSHIP_GRANTED
    GUEST_RESTRICTED
  }

  enum EventType {
    RUN
    COLLECTION
    FUNDRAISING
    MEETING
    CLINIC
    SOCIAL
  }

  type Election {
    id: ID!
    electionName: String!
    startTime: DateTime
    endTime: DateTime
    races: [Ballot]
  }

  type Vote {
    id: ID!
    ballot: Ballot!
    candidate: User
    voter: User!
  }

  type Vehicle {
    id: ID!
    year: Int!
    make: String!
    model: String!
    name: String
    trim: String
    image: CloudinaryImage
    outfitLevel: OutfitLevel
    mods: [String]
  }

  type RigImage {
    id: ID!
    image: CloudinaryImage
  }

  type Preference {
    id: ID!
    user: User
    emergencyContactName: String
    emergencyContactPhone: String
    photoPermissions: Boolean
    showPhoneNumber: Boolean
  }

  type UserMeta {
    id: ID!
    user: User
    emailVerified: Boolean
    firstLoginComplete: Boolean
    accountSetupComplete: Boolean
    oldSitemigrationComplete: Boolean
  }

  type ContactInfo {
    id: ID!
    user: User
    street: String
    city: String
    state: String
    zip: String
    phone: String!
  }

  type Condition {
    id: ID!
    report: RunReport!
    status: TrailCondition!
    notes: String
  }

  type SuccessMessage {
    message: String
  }

  type SuccessTime {
    time: DateTime
  }

  type Mutation {
    register(
      firstName: String
      lastName: String
      email: String!
      confirmEmail: String!
      source: String!
    ): SuccessMessage
    signUp(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      username: String!
      gender: Gender!
      birthdate: DateTime!
      token: String!
    ): SuccessMessage!
    unlockNewAccount(username: String!): SuccessMessage!
    login(username: String!, password: String!): SuccessMessage!
    logout: SuccessMessage
    requestReset(email: String!): SuccessMessage
    resetPassword(
      resetToken: String!
      password: String!
      confirmPassword: String!
    ): User!
    changePassword(password: String!, confirmPassword: String!): SuccessMessage
    changeEmail(email: String!): SuccessMessage
    updateRole(role: Role, userId: ID!): User
    updateAccountType(accountType: AccountType, userId: ID!): User
    updateAccountStatus(accountStatus: AccountStatus, userId: ID!): User
    updateOffice(office: Office, userId: ID!): User
    updateTitle(title: Title, userId: ID!): User
    createEvent(event: UpsertEventInput!): SuccessMessage
    updateEvent(id: ID!, event: UpsertEventInput!): SuccessMessage
    setRSVP(rsvp: RSVPInput): SuccessMessage
    sendMessage(
      to: [String!]!
      subject: String
      htmlText: String!
    ): SuccessMessage
    updateUserProfileSettings(data: UserUpdateInput!, id: ID!): SuccessMessage
    updateUserAdminProfileSettings(
      data: UserAdminUpdateInput!
      id: ID!
    ): SuccessMessage
    updateAvatar(data: ImageUpdateInput!): SuccessMessage
    deleteAvatar(avatar: CloudinaryImageInput!): SuccessMessage
    updateRig(data: ImageUpdateInput!): SuccessMessage
    deleteRig(rig: CloudinaryImageInput!): SuccessMessage
    updateVehicle(id: ID, vehicle: VehicleInput!): SuccessMessage
    submitElection(election: ElectionInput!): Election
    submitVote(vote: VoteInput): SuccessMessage
    createTrail(trail: TrailInput): SuccessMessage
    updateTrail(trail: TrailInput!, id: ID!): SuccessMessage
  }

  type Query {
    myself: User
    users(
      role: [Role]
      accountStatus: [AccountStatus]
      accountType: [AccountType]
      title: [Title]
      office: [Office]
      orderBy: [String]
    ): [User]!
    user(username: String): User!
    getRegistration(token: String): User
    getDuesLastReceived(username: String!): SuccessTime
    getOfficer(office: Office!): User!
    getMembers(accountTypes: [AccountType]): [User]!
    getRunLeaders: [User]!
    getMessageRecipients: [User]!
    getUpcomingEvents(count: Int): [Event]!
    # getMyUpcomingEvents: [Event]!
    getUserEvents(username: String!, eventType: EventType): [Event]!
    getPastEvents: [Event]!
    getEvent(eventId: ID!): Event!
    getNextEvent: Event
    # getMyNextEvent: Event
    getTrails: [Trail]!
    getTrail(slug: String!): Trail
    electionCandidates(
      accountType: AccountType!
      accountStatus: AccountStatus!
    ): [User]!
    getActiveElections: [Election]!
    getActiveElectionsWithResults: [Election]!
    getElection(id: ID!): Election!
    getUserVote(ballot: ID): [Vote]!
    getElections(startTime: DateTime, endTime: DateTime): [Election]!
    getMembershipLogItems(
      username: String!
      messageCode: MembershipMessageCode!
    ): [MembershipLogItem]!
    # adminStats: AdminStats
    # activeMembersPerYear: MemberCount
    # guestsWithLockedAccounts: [User]!
    # guestsAskedToJoin: [User]!
    # guestsEligibleForMembership: [User]!
  }

  type Registration {
    id: ID
    createdAt: DateTime!
    # ipAddress: String!
    firstName: String
    lastName: String
    email: String!
    source: String!
    token: String!
    tokenExpiry: DateTime!
  }

  type User {
    id: ID
    createdAt: DateTime!
    joined: DateTime
    lastLogin: DateTime
    firstName: String
    lastName: String
    email: String
    gender: Gender
    birthdate: DateTime
    username: String
    preferences: Preference
    userMeta: UserMeta
    contactInfo: ContactInfo
    avatar: CloudinaryImage
    isCharterMember: Boolean!
    title: Title
    role: Role!
    accountStatus: AccountStatus
    accountType: AccountType
    office: Office
    rig: RigImage
    # vehicles: [Vehicle]
    vehicle: Vehicle
    comfortLevel: String
    activityLog: [ActivityLogItem]
    membershipLog: [MembershipLogItem]
    eventsRSVPd: [RSVP]
    eventsLead: [Event]
    trailsVisited: [Trail]
    bandaids: [Bandaid]
    runReportsLogged: [RunReport]
  }

  type ActivityLogItem {
    id: ID!
    time: DateTime!
    message: String!
    messageCode: ActivityMessageCode!
    user: User!
    link: String
  }

  type MembershipLogItem {
    id: ID!
    time: DateTime!
    message: String!
    messageCode: MembershipMessageCode!
    user: User!
    logger: User
  }

  type Event {
    id: ID!
    type: EventType!
    title: String!
    creator: User!
    description: String
    featuredImage: CloudinaryImage
    startTime: DateTime
    endTime: DateTime
    host: User
    rsvps: [RSVP]
    address: String
    trailDifficulty: TrailDifficulty
    trailNotes: String
    rallyAddress: String
    rallyTime: DateTime
    membersOnly: Boolean
    trail: Trail
    bandaids: [Bandaid]
    runReports: [RunReport]
  }

  type RSVP {
    member: User!
    event: Event!
    status: RSVPStatus!
  }

  type Trail {
    id: ID!
    slug: String!
    name: String
    description: String
    featuredImage: CloudinaryImage
    trailheadCoords: String
    # coords: Coords
    address: String
    avgDifficulty: TrailDifficulty
    avgRatings: Float
    currentConditions: String
    conditionsLastReported: DateTime
    favoriteCount: Int
    pastEvents: [Event]
    visitors: [User]
  }

  type RunReport {
    id: ID!
    startTime: DateTime
    endTime: DateTime
    reportFiled: DateTime
    reporter: User
    title: String
    description: String
    trail: Trail
    event: Event
    weather: String
    difficulty: TrailDifficulty
    rating: Float
    conditions: Condition
    conditionsNotes: String
    favorite: Boolean
  }

  type Bandaid {
    id: ID!
    occurred: DateTime
    event: Event
    memberInvolved: User
    title: String
    description: String
  }

  input RSVPInput {
    userId: ID
    eventId: ID
    status: RSVPStatus
  }

  input UserUpdateInput {
    firstName: String!
    lastName: String!
    username: String!
    gender: String!
    birthdate: DateTime!
    joined: DateTime
    contactInfoId: ID
    street: String!
    city: String!
    state: String!
    zip: String!
    phone: String!
    avatar: CloudinaryImageInput
    preferencesId: ID
    emergencyContactName: String!
    emergencyContactPhone: String!
  }

  input UserAdminUpdateInput {
    id: String
    title: String
    isCharterMember: Boolean!
    office: String
    role: String!
    accountStatus: String!
    accountType: String!
  }

  input UpsertEventInput {
    type: String!
    title: String!
    description: String
    startTime: DateTime!
    endTime: DateTime!
    address: String
    trailDifficulty: TrailDifficulty
    trailNotes: String
    rallyAddress: String
    rallyTime: DateTime
    membersOnly: Boolean
    host: String!
    trail: String
    featuredImage: String
    newFeaturedImage: CloudinaryImageInput
  }

  input ElectionInput {
    electionName: String!
    startTime: String!
    endTime: String!
    races: [BallotInput!]!
  }

  input BallotInput {
    id: String
    title: String!
    desc: String
    candidates: [UserInput!]!
    # votes: [Vote] @relation(name: "BallotVote")
  }

  input UserInput {
    id: ID!
  }

  input VoteInput {
    ballot: ID!
    dateTime: DateTime!
    candidate: ID
  }

  type Result {
    candidate: User
    count: Int!
  }

  type Ballot {
    id: ID!
    title: String!
    desc: String
    candidates: [User!]!
    votes: [Vote]
    results: [Result]
  }

  input ImageUpdateInput {
    old: CloudinaryImageInput
    new: CloudinaryImageInput!
  }

  input CloudinaryImageInput {
    id: ID
    publicId: String!
    url: String!
    smallUrl: String
  }

  type CloudinaryImage {
    id: ID
    publicId: String!
    url: String!
    smallUrl: String
  }

  input TrailInput {
    name: String!
    slug: String!
    description: String
    featuredImage: String
    newFeaturedImage: CloudinaryImageInput
    trailheadCoords: String
    address: String
  }

  input VehicleInput {
    year: Int
    make: String
    model: String
    trim: String
    name: String
    outfitLevel: OutfitLevel
    mods: [String]
  }

  type AdminStats {
    activeFullMembers: Int
    pastDueFullMembers: Int
    delinquentFullMembers: Int
    removedFullMembers: Int
    resignedFullMembers: Int
    inactiveFullMembers: Int
    limitedGuestMembers: Int
    lockedGuestMembers: Int

    emeritusMembers: Int
    deceasedMembers: Int
    associateMembers: Int
    guestMembers: Int
    charterMembers: Int

    fullMembersLastYear: Int
    newFullMembersThisYear: Int
    neededForQuorum: Int
    neededToPassMotion: Int
    neededToVoteOnNewMember: Int
    newFullMembersAllowed: Int
    fullMembersAllowed: Int
  }

  type MemberCount {
    year: Int
    count: Int
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (typeDefs);

/***/ }),

/***/ "./bundle/utils/index.ts":
/*!*******************************!*\
  !*** ./bundle/utils/index.ts ***!
  \*******************************/
/*! exports provided: hasRole, hasAccountStatus, hasAccountType, hasRoleOrIsSelf, isSelf, yearInMs, monthInMs, resetTokenTimeoutInMs, timestampFormat, getUploadLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRole", function() { return hasRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAccountStatus", function() { return hasAccountStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAccountType", function() { return hasAccountType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRoleOrIsSelf", function() { return hasRoleOrIsSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelf", function() { return isSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearInMs", function() { return yearInMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthInMs", function() { return monthInMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTokenTimeoutInMs", function() { return resetTokenTimeoutInMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampFormat", function() { return timestampFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUploadLocation", function() { return getUploadLocation; });
const hasRole = function hasRole(user, rolesNeeded, shouldThrow = true) {
  const matchedRoles = rolesNeeded.includes(user.role);

  if (!matchedRoles && shouldThrow) {
    throw new Error(`You do not have the necessary role
      : ${rolesNeeded}
      You Have
      : ${user.role}
    `);
  }

  return matchedRoles;
};
const hasAccountStatus = function hasAccountStatus(user, statusNeeded, shouldThrow = true) {
  const matchedStatus = statusNeeded.includes(user.accountStatus);

  if (!matchedStatus && shouldThrow) {
    throw new Error(`You do not have the necessary account status
      : ${statusNeeded}
      You Have
      : ${user.accountStatus}
    `);
  }

  return matchedStatus;
};
const hasAccountType = function hasAccountType(user, typeNeeded, shouldThrow = true) {
  const matchedType = typeNeeded.includes(user.accountType);

  if (!matchedType && shouldThrow) {
    throw new Error(`You do not have the necessary account type
      : ${typeNeeded}
      You Have
      : ${user.accountType}
    `);
  }

  return matchedType;
};
const hasRoleOrIsSelf = function hasRoleOrIsSelf(currentUser, rolesNeeded, idInQuestion, shouldThrow = true) {
  const result = hasRole(currentUser, rolesNeeded, false) || isSelf(currentUser.id, idInQuestion, false);

  if (!result && shouldThrow) {
    throw new Error('You must be an admin to do this');
  }
};
const isSelf = function isSelf(currentUser, idInQuestion, shouldThrow = true) {
  const result = currentUser.id === idInQuestion; // console.log("current user id", currentUser.id);

  if (!result && shouldThrow) {
    throw new Error('You can only update your own information');
  }

  return result;
};
const yearInMs = 1000 * 60 * 60 * 24 * 365; // 1 year

const monthInMs = 1000 * 60 * 60 * 24 * 30;
const resetTokenTimeoutInMs = 3600000; // 1 hour

const timestampFormat = 'YYYY-MM-DD HH:mm:ss';
const getUploadLocation = appendage =>  true ? `dev_${appendage}` : undefined;

/***/ }),

/***/ "./graphql.ts":
/*!********************!*\
  !*** ./graphql.ts ***!
  \********************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-http */ "serverless-http");
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bundle_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bundle/app */ "./bundle/app.ts");
/* harmony import */ var _bundle_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bundle/server */ "./bundle/server.ts");



_bundle_server__WEBPACK_IMPORTED_MODULE_2__["default"].applyMiddleware({
  app: _bundle_app__WEBPACK_IMPORTED_MODULE_1__["default"],
  cors: false
}); // export const handler = serverlessHttp(app, {
//   request: (req: any, event: any, context: any) => {
//     /**
//      * **** IMPORTANT ****
//      * this request() function is important because
//      * it adds the lambda's event and context object
//      * into the express's req object so you can access
//      * inside the resolvers or routes if youre not using apollo
//      */
//     req.event = event;
//     req.context = context;
//   },
// });

const handler = serverless_http__WEBPACK_IMPORTED_MODULE_0___default()(_bundle_app__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cloudinary");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "graphql-binding":
/*!**********************************!*\
  !*** external "graphql-binding" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-binding");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "prisma-client-lib":
/*!************************************!*\
  !*** external "prisma-client-lib" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prisma-client-lib");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-http");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ })));