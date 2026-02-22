// Simplified dotenv loader using the public API to avoid internal paths
try {
  require('dotenv').config()
} catch (err) {
  console.error('Failed to load dotenv:', err)
}
