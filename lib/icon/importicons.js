let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  export default importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {}