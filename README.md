# express-ts-demo app

This is a express demo app created using typescript for CRUD operations for user. Class-based approach is followed.
Following things are used -

- Express
- Typescript
- Mongodb through mongoose
- Class based approach
- Input validation using zod and middleware
- CSR pattern
- Environment variables using dotenv
- Hot reloading using ts-node-dev

## Running on your local

Pre-requisite-
Mongodb server should be running on your local machine. If you want to run it using docker, you can refer to mongodb setup below.

Steps-
Clone repository
npm install
npm run dev

## Mongodb setup

```
docker pull mongo
docker run -d --name mongodb -p 27017:27017 -v express-ts-demo-db:/data/db mongo
```

## App setup and configuration

```
npm init -y
npm install express mongoose zod dotenv
npm install -D typescript ts-node-dev @types/express @types/node
npx tsc --init
```

### tsconfig.json -

Update -

```
"module": "commonjs",
"verbatimModuleSyntax": false,
```

Add -

```
"esModuleInterop": true
```

Setting "module": "commonjs" in your tsconfig.json tells the TypeScript compiler to generate CommonJS-style JavaScript modules during compilation.

"verbatimModuleSyntax": false tells TypeScript to transform ESM-style imports to CommonJS-style.

"esModuleInterop": true ensures compatibility with default imports from CommonJS modules (like express).

### Add script in package.json to start server -

```
"dev": "ts-node-dev --respawn src/app.ts"
```

- ts-node-dev: Combines ts-node + nodemon-like reload behavior. Automatically recompiles and restarts when .ts files change
- --respawn: Ensures that child processes are correctly restarted (important for graceful reloads)
- src/app.ts: The entry point of your app

### Create .env at root -

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/express-ts-demo
```

## Development

Create model – user.model.ts

Create validator using zod – user.validator.ts. Types exported will be used for type checking in repository. The main purpose is to perform input validation and we will be implementing through middleware.

Create middleware – validator.middleware.ts

Create repository – user.repository.ts

Create service – user.service.ts

Create controller – user.controller.ts

Create router – user.router.ts

Create database.config.ts

Create app.ts

## Notes

- We have used class-based approach. We could have used function-based approach also.

- If we want to do validation in controller in place of middleware, code will be –

```
// src/controllers/user.controller.ts
import { Request, Response } from 'express';
import * as UserService from '../services/user.service';
import { createUserSchema } from '../validators/user.validator';

export const createUser = async (req: Request, res: Response) => {
  try {
    // ✅ Validate request body
    const validatedData = createUserSchema.parse(req.body);

    const user = await UserService.createUser(validatedData);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error && 'issues' in error) {
      return res.status(400).json({ errors: (error as any).issues });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
```

But middleware-based validation with Zod helps us decouple validation logic from your controller, making your code more modular, testable, and reusable. Hence we have used middleware.
