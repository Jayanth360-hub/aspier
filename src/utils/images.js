// Resolves an asset filename (e.g. "director.jpg") to its built Vite URL.
// Uses import.meta.glob to eagerly map every file in /src/assets.

const modules = import.meta.glob('../assets/*', { eager: true, query: '?url', import: 'default' })

const map = {}
for (const path in modules) {
  const filename = path.split('/').pop()
  map[filename] = modules[path]
}

export function asset(filename) {
  return map[filename] || ''
}
