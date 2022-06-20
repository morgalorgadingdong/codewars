def how_much_i_love_you(nb_petals):
    love = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    remainder = nb_petals % len(love)
    return love[remainder-1]