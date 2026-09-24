# Maintenance mode

Public traffic is gated by **`MAINTENANCE_MODE`** (Vercel Production env).

## Enable (site offline)

1. Vercel → **holy-bula-website** → Settings → Environment Variables  
2. Set `MAINTENANCE_MODE` = `true` for **Production**  
3. Redeploy production (or push to `main` if Git integration redeploys)

## Restore full website

1. Set `MAINTENANCE_MODE` = `false` or remove the variable for **Production**  
2. Redeploy production  

The full site code remains on `main`. Tag **`website-pre-maintenance`** marks the last production state before maintenance mode was added.
