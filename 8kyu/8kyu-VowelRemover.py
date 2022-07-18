def shortcut( s ):
    v = 'aeiou'
    for c in v:
        s = s.replace(c, '')
    return s