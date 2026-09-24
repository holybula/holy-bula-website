/** Set MAINTENANCE_MODE=true in Vercel (or .env.local) to show the maintenance page on all routes. */
export function isMaintenanceMode(): boolean {
  return process.env.MAINTENANCE_MODE === 'true'
}
