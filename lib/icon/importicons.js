let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  module.exports = importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
  console.log(error)
}