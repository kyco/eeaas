const MyEgg = {
  name: string,
  enabled?: boolean,
  trigger?: Trigger,
  stopTrigger?: Trigger,
  resources?: Resource[],
  onStart: (loadedResources: LoadedResource[]) => void | Promise<void>,
  onStop: (loadedResources: LoadedResource[]) => void | Promise<void>
}
