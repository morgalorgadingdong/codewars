def set_alarm(employed, vacation):
    if vacation == True:
        return False
    elif employed == True:
        return True
    else:
        return False