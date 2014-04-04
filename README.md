`Accounts.sendVerificationEmail` throws `Error: No such email address for user.` when called with one argument, a `userId`. This `userId` corresponds to a user that does have an email address; however, that email address is already verified. I think that either the thrown error in this case should read something like `Error: user has no unverified email addresses`, or an idempotent verification email should be sent (preferred).
