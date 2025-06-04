export type InternalEgg = {
  name: string
  enabled: boolean
  trigger: Trigger
  onStart: () => void
  onStop: () => void
}
