const completionSpec: Fig.Spec = {
  name: "seq",
  description: "Print sequences of numbers",
  options: [
    {
      name: ["-f", "--format"],
      description: "The format of the output",
      args: {
        name: "Format",
        // generators: tmpGenerator,
      },
    },
    {
      name: ["-s", "--sepatator"],
      description: "Use string to separate numbers",
      args: {
        name: "Format",
        // generators: tmpGenerator,
      },
    },
    {
      name: ["-t", "--terminator"],
      description: "Use string to terminate sequence of numbers",
      args: {
        name: "Format",
        // generators: tmpGenerator,
      },
    },
    {
      name: ["-w", "--fixed-width"],
      description:
        "Equalize the widths of all numbers by padding with zeros as necessary",
    },
  ],
  // Only uncomment if seq takes an argument
  args: {},
};
export default completionSpec;
