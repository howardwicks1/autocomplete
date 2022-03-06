const completionSpec: Fig.Spec = {
  name: "fly",
  description: "Fly CLI",
  subcommands: [
    {
      name: "abort-build",
      description: "Abort a build",
    },
    {
      name: "active-users",
      description: "List the active users since a date or for the past 2 months",
    },
    {
      name: "archive-pipeline",
      description: "Archive a pipeline",
    },
    {
      name: "builds",
      description: "List builds data",
    },
    {
      name: "check-resource",
      description: "Check a resource",
    },
    {
      name: "check-resource-type",
      description: "Check a resource-type",
    },
    {
      name: "checklist",
      description: "Print a Checkfile of the given pipeline",
    },
    {
      name: "clear-resource-cache",
      description: "Clear cache of a resource",
    },
    {
      name: "clear-task-cache",
      description: "Clears cache from a task container",
    },
    {
      name: "completion",
      description: "Generate shell completion code",
    },
    {
      name: "containers",
      description: "Print the active containers",
    },
    {
      name: "curl",
      description: "Curl the api",
    },
    {
      name: "delete-target",
      description: "Delete target",
    },
    {
      name: "destroy-pipeline",
      description: "Destroy a pipeline",
    },
    {
      name: "destroy-team",
      description: "Destroy a team and delete all of its data",
    },
    {
      name: "disable-resource-version",
      description: "Disable a version of a resource",
    },
    {
      name: "edit-target",
      description: "Edit a target",
    },
    {
      name: "enable-resource-version",
      description: "Enable a version of a resource",
    },
    {
      name: "execute",
      description: "Execute a one-off build using local bits",
    },
    {
      name: "expose-pipeline",
      description: "Make a pipeline publicly viewable",
    },
    {
      name: "format-pipeline",
      description: "Format a pipeline config",
    },
    {
      name: "get-pipeline",
      description: "Get a pipeline's current configuration",
    },
    {
      name: "get-team",
      description: "Show team configuration",
    },
    {
      name: "help",
      description: "Print the help message",
    },
    {
      name: "hide-pipeline",
      description: "Hide a pipeline from the public",
    },
    {
      name: "hijack",
      description: "Execute a command in a container",
    },
    {
      name: "jobs",
      description: "List the jobs in the pipelines",
    },
    {
      name: "land-worker",
      description: "Land a worker",
    },
    {
      name: "login",
      description: "Authenticate with the target",
    },
    {
      name: "logout",
      description: "Release authentication with the target",
    },
    {
      name: "order-instanced-pipelines",
      description: "Orders instanced pipelines within an instance group",
    },
    {
      name: "order-pipelines",
      description: "Orders pipelines",
    },
    {
      name: "pause-job",
      description: "Pause a job",
    },
    {
      name: "pause-pipeline",
      description: "Pause a pipeline",
    },
    {
      name: "pin-resource",
      description: "Pin a version to a resource",
    },
    {
      name: "pipelines",
      description: "List the configured pipelines",
    },
    {
      name: "prune-worker",
      description: "Prune a stalled, landing, landed, or retiring worker",
    },
    {
      name: "rename-pipeline",
      description: "Rename a pipeline",
    },
    {
      name: "rename-team",
      description: "Rename a team",
    },
    {
      name: "rerun-build",
      description: "Rerun a build",
    },
    {
      name: "resource-versions",
      description: "List the versions of a resource",
    },
    {
      name: "resources",
      description: "List the resources in the pipeline",
    },
    {
      name: "schedule-job",
      description: "Request the scheduler to run for a job. Introduced as a recovery command for the v6.0 scheduler",
    },
    {
      name: "set-pipeline",
      description: "Create or update a pipeline's configuration",
    },
    {
      name: "set-team",
      description: "Create or modify a team to have the given credentials",
    },
    {
      name: "status",
      description: "Login statu",
    },
    {
      name: "sync",
      description: "Download and replace the current fly from the target",
    },
    {
      name: "targets",
      description: "List saved targets",
    },
    {
      name: "teams",
      description: "List the configured teams",
    },
    {
      name: "trigger-job",
      description: "Start a job in a pipeline",
    },
    {
      name: "unpause-job",
      description: "Unpause a job",
    },
    {
      name: "unpause-pipeline",
      description: "Un-pause a pipeline",
    },
    {
      name: "unpin-resource",
      description: "Unpin a resource",
    },
    {
      name: "userinfo",
      description: "User information",
    },
    {
      name: "validate-pipeline",
      description: "Validate a pipeline config",
    },
    {
      name: "volumes",
      description: "List the active volumes",
    },
    {
      name: "watch",
      description: "Stream a build's output",
    },
    {
      name: "workers",
      description: "List the registered workers",
    },
  ],
};
export default completionSpec;
