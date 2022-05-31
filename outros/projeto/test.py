from win10toast import ToastNotifier 

toaster = ToastNotifier()

toaster.show_toast(
    "Nome da Notificação", "Legenda da notificação", threaded=True, icon_path=None, duration=5 )