let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
module.exports = importAll(require['context']('./icons', true, /\.svg$/))