def calculate_years(principal, interest, tax, desired):
    years = 0
    new_principal = principal
    while new_principal < desired:
        profit = new_principal * interest
        taxed = profit * tax
        new_principal = new_principal + profit - taxed
        years = years + 1
        print(new_principal)
    return years