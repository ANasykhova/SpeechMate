// import { NextApiRequest, NextApiResponse } from 'next';
// import { getAuth } from 'firebase-admin/auth';

// import { withAdmin as withFirebaseAdmin } from '~/core/middleware/with-admin';
// import withCsrf from '~/core/middleware/with-csrf';

// export default async function reactivateUserHandler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   await withFirebaseAdmin();
//   await withCsrf()(req);

//   const auth = getAuth();
//   const userId = req.query.id as string;

//   await auth.updateUser(userId, {
//     disabled: false,
//   });

//   return res.json({
//     success: true,
//   });
// }
