// import { NextApiRequest, NextApiResponse } from 'next';
// import { getAuth } from 'firebase-admin/auth';

// import { withAdmin as withFirebaseAdmin } from '~/core/middleware/with-admin';
// import withCsrf from '~/core/middleware/with-csrf';

// export default async function impersonateUserHandler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   await withFirebaseAdmin();
//   await withCsrf()(req);

//   const userId = req.query.id as string;
//   const auth = getAuth();
//   const customToken = await auth.createCustomToken(userId);

//   return res.json({
//     customToken,
//   });
// }
