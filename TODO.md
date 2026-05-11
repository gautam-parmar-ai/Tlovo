# Deployment TODO (Vercel)

## Backend (required for Vercel)

- [ ] Convert `backend/server.js` from Express listener (port 4000) to Vercel serverless handler (rollback requested)
- [ ] Remove Vercel scaffolding files if rollback is applied
- [ ] Ensure deploy instructions match rollback state

## Frontend & Admin

- [ ] Ensure both `frontend` and `admin` use `import.meta.env.VITE_BACKEND_URL` (verify hardcoded localhost removed)
- [ ] Rollback any admin hardcoded URL changes if rollback requested

## Vercel Projects

- [ ] Deploy `frontend` and `admin` to Vercel
- [ ] Backend deployment must be revisited because rollback prevents Vercel-only backend deployment

## Env Vars

- [ ] Set Vercel env vars for frontend/admin
