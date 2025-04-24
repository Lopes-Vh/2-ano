def calcular_qi_para_rank_ss(custo_rank_e, ja_tem):
    ranks = ['E', 'D', 'C', 'B', 'A', 'S', 'SS']
    quantidade_necessaria = {rank: 0 for rank in ranks}
    quantidade_necessaria['SS'] = 1  # Queremos criar 1 espada Rank SS

    # Calcula o total de espadas necessárias por rank
    for i in range(len(ranks)-1, 0, -1):
        rank_atual = ranks[i]
        rank_anterior = ranks[i-1]
        quantidade_necessaria[rank_anterior] += quantidade_necessaria[rank_atual] * 3

    # Subtrai espadas que o jogador já tem (de D até S)
    for rank in ranks[1:-1]:
        quantidade_necessaria[rank] = max(0, quantidade_necessaria[rank] - ja_tem.get(rank, 0))

    # Recalcula o total de Rank E depois das subtrações
    for i in range(1, len(ranks)):
        rank = ranks[i]
        anterior = ranks[i-1]
        quantidade_necessaria[anterior] += quantidade_necessaria[rank] * 3

    total_rank_e = quantidade_necessaria['E']
    custo_total = total_rank_e * custo_rank_e

    return total_rank_e, custo_total

def perguntar_dados():
    print("=== Calculadora de Espadas até Rank SS - Anime Arise ===")
    
    while True:
        valor_input = input("Digite o valor de uma espada Rank E em Qi (ex: 5.2): ")
        try:
            custo_rank_e = float(valor_input)
            if custo_rank_e > 0:
                break
            else:
                print("Por favor, insira um valor positivo.")
        except ValueError:
            print("Valor inválido. Digite um número decimal, como 5.2.")

    ranks_para_perguntar = ['D', 'C', 'B', 'A', 'S']
    possui = {}
    print("\nAgora, informe quantas espadas você já tem:")
    for rank in ranks_para_perguntar:
        resposta = input(f"Quantas espadas Rank {rank} você tem? (pressione Enter se nenhuma) ")
        if resposta.strip().isdigit():
            possui[rank] = int(resposta.strip())

    return custo_rank_e, possui

# Programa principal
custo, espadas_possuídas = perguntar_dados()
rank_e, qi_total = calcular_qi_para_rank_ss(custo, espadas_possuídas)

print("\n=== Resultado ===")
print(f"Espadas Rank E necessárias: {rank_e}")
print(f"Custo total em Qi: {qi_total:.2f}")
