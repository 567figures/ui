import { Toast, useToastState } from '@tamagui/toast'

export const CurrentToast = () => {
  const toast = useToastState();

  // don't show any toast if no toast is present or it's handled natively
  if (!toast || toast.isHandledNatively) {
    return null
  }
  
  return (
    <Toast key={toast.id} duration={toast.duration} viewportName={toast.viewportName}>
      <Toast.Title>{toast.title}</Toast.Title>
      {!!toast.message && <Toast.Description>{toast.message}</Toast.Description>}
    </Toast>
  )
}