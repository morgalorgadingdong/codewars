def human_years_cat_years_dog_years(human_years):
    cat_years = human_years * 4
    dog_years = human_years * 5
    print(cat_years)
    if human_years == 1:
        cat_years += 11
        dog_years += 10
    elif human_years >= 2:
        cat_years += 16
        dog_years += 14
    return [human_years,cat_years,dog_years]