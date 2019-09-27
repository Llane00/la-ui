let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
export default importAll(require['context']('./icons', true, /\.svg$/))