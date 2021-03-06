{/*Dados dos inidicadores em powerBI e mapas*/} const initialDetails = [{ 
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZDkyMzAzYjMtNzQzNC00YTUxLWI4N2EtZDU4MTBhODZmZjE2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Familias Atendidas",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "milho,arroz,feijao,mandioca"
},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZTBiZGZkY2MtNTk1ZC00ZWU5LWEyOGMtMTczMDA2YmEzOWMwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual dos Chefes de Família por Faixa Etária",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "faixa etaria"
},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiN2FkYjkyNTYtOGJhNy00ODY0LTk3ZjAtNWZjOWNmNWMwMDgxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Total de Chefes de Família por Escolaridade",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "escolaridade"
},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMjZmZTE0NTMtMTU0Mi00YTRmLTlhOGEtZWFhMTQ5OTdmZjY5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual de Chefes de Família por Tipo",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "produtor,feirante"
},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYTM1YzEwODUtYzcxYS00Y2FhLWFmZjItNGZjZGI2YzhiZTAxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Vendas Por Produto",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "produto,categoria,unidade,quantidade,tipo de beneficiamento,origem,abacate,abacaxi,abobora "
},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYTBjZTg0NWItYWUzYi00NWIwLWE4NDAtZjlhOGY1YTk0NjY4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Ranking Por Produto",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "categoria,produto,tipo de beneficiamento,origem"
},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNjFiMDVlMWYtY2UwOS00NTMwLWIyNjYtMDkyYTE0YzNhOWQzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Produtos mais Comercializados por Categoria",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "categoria"
},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMDI0ZDY1NTgtMmEzMC00MzMyLTgxMGEtNWYyZjE5ZjFhMzM2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: " Rebanho Bovino",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "leite,corte,cabeca,rebanho"
},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNTA0YzJmYjgtMmIzMS00MGNlLTljNmUtNDMwZjgxMWMxNWI3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: " Total de Cabeça por Faixa Etária - Bovino",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "femeas,machos"

},
{
  categoria: "ProdCentro",
  url: "https://app.powerbi.com/view?r=eyJrIjoiOWE4ZTA0NmYtNTg1My00ZmU1LTgwYzEtMmIxY2VlY2ViYmI4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: " Avicultura ",
  legend: "* Fonte: SEMPROR.",
  palavraschave: "postura,corte,aves"
},
{
  categoria: "ProdMunicipal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMDUzOGJlMjMtZGNkZS00MzcxLTkwZTYtYzI2NzY2YWEwYWQzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionbb7462198a140912ce6d",
  titulobi: "Produtos mais Produzidos no Município",
  legend: "* Fonte: IBGE-PAM.",
  palavraschave: "mandioca,banana,milho,melancia,mamao,feijao"

},
{
  categoria: "ProdMunicipal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNTViZjU0NDgtNzg2YS00OTU1LTgyY2UtYTE3OTVjZjA3Y2E5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Evolução da Produção Municipal",
  legend: "* Fonte: IBGE-PAM.",
  palavraschave: "abacaxi,acai,arroz,banana,cacau,cafe,cebola,feijao,laranja"
},
{
  categoria: "ProdMunicipal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMWFjOTM4ZWMtN2MxNS00YjE0LTk4YWMtOWUyZjE5YzUwYjNlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Área Colhida (Héctares) X Área Plantada (Héctares)",
  legend: "* Fonte: IBGE-PAM.",
  palavraschave: "abacaxi,acai,arroz,banana,cacau,cafe,cebola,feijao,laranja"

},
{
  categoria: "ProdMunicipal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZTUzNzc0ODItYWUzYi00NGJkLTg3MTgtOTA3MGY0ZDMyMDIxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Ranking dos Produtos mais Produzidos por Municipio",
  legend: "* Fonte: IBGE-PAM.",
  palavraschave: "abacaxi,acai,arroz,banana,cacau,cafe,cebola,feijao,laranja,maraba,parauapebas,canaa dos carajas,curionopolis,eldorado dos carajas,tucurui"

},
{
  categoria: "ProdPecuaria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTJiZWE3OWMtODBiMC00ODYwLWJkY2UtM2FlYzI0MmUzMjIwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade Produzida - Rebanho",
  legend: "* Fonte: IBGE-PPM. <br>** Quantidade produzida em cabeças.",
  palavraschave: "bovino,suíno,bubalino,galinha,caprino"

},
{
  categoria: "ProdPecuaria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNDhkYTUzNWItZTQ3Ni00YzA3LTllNmItMTgxNzU1ZGNhNmUwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual Produzido - Rebanho",
  legend: "* Fonte: IBGE-PPM.",
  palavraschave: "bovino,suíno,bubalino,galinha,caprino"
},
{

  categoria: "ProdPecuaria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZDc4NTYxNmQtYjIyZS00YTE0LWFiODAtMDE3MTc2ZmI0ZWUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Série Histórica - Rebanho",
  legend: "* Fonte: IBGE-PPM.",
  palavraschave: "bovino,suíno,bubalino,galinha,caprino"
},
{
  categoria: "ProdPecuaria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMzcyNWYwYzItOGVkMy00MTY3LWJkMDMtMzEyZDlkMWMyYTA3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Ranking de Rebanho por Municipio",
  legend: "* Fonte: IBGE-PPM.",
  palavraschave: "bovino,suíno,bubalino,galinha,caprino"
},
{
  categoria: "ProdPecuaria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNWMzZTRhMGYtZmU1My00Y2JjLWFlNWYtODI3NTIwNWIzNWUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade Produzida - Animal",
  legend: "* Fonte: IBGE-PPM.",
  palavraschave: "ovos de galinha,mel de abelha,leite"
},
{
  categoria: "ProdPecuaria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNGIxNzhkZTYtNWEyMC00NjBhLTg4NjItZDM4OWQ3ODkzNjM0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual Produzido - Animal",
  legend: "* Fonte: IBGE-PPM.",
  palavraschave: "ovos de galinha,mel de abelha,leite"
},
{
  categoria: "ProdPecuaria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMjQyOWY0ZmQtZDZjZS00MjY0LTg1NzAtN2M4NjY4NTUzMTNjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Série Histórica - Produção Animal",
  legend: "* Fonte: IBGE-PPM.",
  palavraschave: "ovos de galinha,mel de abelha,leite"
},
{
  categoria: "ProdPecuaria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZjRiYjVlZjQtMTgxOS00ZWEyLWE0NjQtYTcyMDM4MjQyMzdkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Ranking de Produção Animal por Municipio",
  legend: "* Fonte: IBGE-PPM.",
  palavraschave: "ovos de galinha,mel de abelha,leite"
},

{
  categoria: "BalancaComercial",
  url: "https://app.powerbi.com/view?r=eyJrIjoiOTUyMGY3MTktMDJmNy00OWEzLTg3MDAtNzJiOWIyMzYzNmM3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335",
  titulobi: "Balança Comercial",
  legend: "* Fonte: MDIC-COMEX.",
  palavraschave: "exportacao,importacao,saldo,parauapebas,maraba,curionopolis,canaa dos carajas"
},
{
  categoria: "BalancaComercial",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMjMyMzZiZGEtNDJiOC00ZjY3LWExMjQtNDAxNWZlOTJlODFkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335",
  titulobi: "Superávit por Município - Região de Parauapebas",
  legend: "* Fonte: MDIC-COMEX.",
  palavraschave: "parauapebas,maraba,curionopolis,canaa dos carajas"
},
{
  categoria: "BalancaComercial",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNmFjNjFlOWItOGUyOC00MDI5LTg5NjEtZDk3NWU0MWVmYTQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection2c7c5e5816bb2d077335",
  titulobi: "Evolução do Comércio Exterior",
  legend: "* Fonte: MDIC-COMEX.",
  palavraschave: "exportacao,importacao,saldo,parauapebas,maraba,curionopolis,canaa dos carajas"
},
{
  categoria: "BalancaComercial",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNWFjNDFmM2UtZjY3Yy00NGU3LTgyNTgtYTIyNWJiYTZlNjZhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection1692d67cbce098e10087",
  titulobi: "Evolução das Exportações por Produto",
  legend: "* Fonte: MDIC-COMEX.",
  palavraschave: "parauapebas,maraba,curionopolis,canaa dos carajas"
},
{
  categoria: "BalancaComercial",
  url: "https://app.powerbi.com/view?r=eyJrIjoiN2MwZWZmMjYtM2NjNy00MjhlLWFkMTctZjc1YjU2NWEzOTUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Evolução das Importações por Produto",
  legend: "* Fonte: MDIC-COMEX.",
  palavraschave: "parauapebas,maraba,curionopolis,canaa dos carajas"

},
{
  categoria: "ComercioIndustria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiODRjMTZiMDgtZmM5Zi00ZmU4LTg5YTAtOWY0YTNhMDk1YjA2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Empresas por Situação",
  legend: "* Fonte: JUCEPA.",
  palavraschave: "ativas,suspensas,fechadas"

},
{
  categoria: "ComercioIndustria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTZjZGE3OWEtOWRmNi00ZjJlLTg5NmUtNjZmYzkyODM1ZmVmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Série Histórica - Porte das Empresas Ativas",
  legend: "* Fonte: JUCEPA.",
  palavraschave: "empresa de grande porte,empresa de medio porte,empresa de pequeno porte,micro empreendedor,microempresa"
},
{
  categoria: "ComercioIndustria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZTZmMmFhMmItMmE0Mi00N2MxLTg2MGQtZWVmM2MwZDk4N2E3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Top 5 - Principais Atividade",
  legend: "* Fonte: JUCEPA.",
  palavraschave: "restaurante e similares,comercio varegista,servico taxi"
},
{
  categoria: "ComercioIndustria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTM2ZmYxNzctZDJiYS00ZmQxLTk1NzAtMTkyZDA5ODNmYWZhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Evolução das Empresas",
  legend: "* Fonte: JUCEPA.",
  palavraschave: "ativa,baixada,suspensa"

},
{
  categoria: "ComercioIndustria",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNjdiZmMxYWYtZmRmYi00MGQ5LTlhOWUtMzhiZjYxNGJiMTI0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Empresas",
  legend: "* Fonte: JUCEPA.",
  palavraschave: "ativa,baixada,suspensa"

},
{
  categoria: "Despesas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMWM5NDNiMzQtNjZjZi00Y2EzLWEyMzEtYmE3NWMxOTAzMzMxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78",
  titulobi: "Despesa Orçamentária",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "orgaos,elemento de despesa"
},
{
  categoria: "Despesas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYTVmYjY0NWQtOTdmYy00YTEzLTlhYmQtNGY4NWNiNjM4ZTM2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Rank por Elemento de Despesa",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "orgaos,elemento de despesa"
},
{
  categoria: "Despesas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNzJlODMyYjctOTUzNS00NWI5LWI2ZGEtMjdhMGRlYmViOTRkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Despesa X Receita",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "orgaos,elemento de despesa,receita,despesa"
},
{
  categoria: "Despesas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiM2I2ZTMzYjQtZTdhOS00YzBkLTliNGUtNDI5M2NhYzVjOWFlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Evolução da Despesa por Mês",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "orgaos,elemento de despesa"
},
{
  categoria: "DespsPessoal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMWUzNGU4MzctMzU2Ni00Yzc0LWE4NzEtMTY0NmI1Y2FhNGZhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionbdd044bc72fa8dbf57da",
  titulobi: "Quantitativo de Servidores",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "cargo,vinculo"
},
{
  categoria: "DespsPessoal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNWU5MzViMmItYWNiYi00ZWJjLThiMjctYTMwZjBiMDhhYjNjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionbdd044bc72fa8dbf57da",
  titulobi: "Série Histórica de Servidores por Cargo e Vínculo",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "cargo,vinculo"
},
{
  categoria: "DespsPessoal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNWEzNjI1NzctZDZiOS00NDdkLTk3ZWYtMDNmMTkyODlhYzI2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection22a81baa682c0d06c2cc",
  titulobi: "Top 10 do Percentual de Servidores por Cargo",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "cargo"
},
{
  categoria: "DespsPessoal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZGQ2ODcyN2EtZDM0OS00ZjM5LTlhY2MtMDYwOTgxNTEwNzE2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection22a81baa682c0d06c2cc",
  titulobi: "Percentual de Servidores por Vínculo",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "vinculo"

},
{
  categoria: "DespsPessoal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZWIxZjg4MGYtNTA2ZC00MzcyLTkxZTktNDZjMzY0MGNiNDZlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection22a81baa682c0d06c2cc",
  titulobi: "Despesas com Pessoal:",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "cargo,valor bruto,valor liquido"
},
{
  categoria: "DespsPessoal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZDgwMGFiNjctYTg4Ni00ZjQ0LWI3NDItMTdjNThjNDMxZTE2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Valor Líquido e Bruto",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "valor bruto,valor liquido"

},
{
  categoria: "DespsPessoal",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNDNiZGEyYzktODlmNS00YWQzLWI2MTEtMmU2MGUxNGY3ZDNiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Série Histórica Líquido e Bruto",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "valor bruto,valor liquido"
},
{
  categoria: "PIB",
  url: "https://app.powerbi.com/view?r=eyJrIjoiM2ZhYjM1MzItMGVlNC00NTY0LTgxODMtMzU4MGEwNzgxZWM3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection5c7c140aa49299d9a545",
  titulobi: "PIB - Parauapebas",
  legend: "* Fonte:PIB * <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais).",
  mais: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante.asdasdasdasdasdaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante.asdasdasdasdasdaLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa nisi. Suspendisse et dignissim urna, vel pretium odio. Curabitur sapien lectus, suscipit at erat a, fringilla tincidunt ante.asdasdasdasdasda",
  palavraschave: "valor pib"
},
{
  categoria: "PIB",
  url: "https://app.powerbi.com/view?r=eyJrIjoiOWM4MTYzOWMtN2NkZi00MGFkLTg0ODktMDMxNDAyNzAwZGQyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionc82c7bdfe576755b358a",
  titulobi: "PIB - Parauapebas e Região",
  legend: "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais).",
  palavraschave: "valor pib,canaa dos carajas,curionopolis,eldorado do carajas,parauapebas"
},
{
  categoria: "PIB",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYWE2YjEyNzgtODNmMS00Y2JkLWE0YzgtMjliMzk1MzdhNzM4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Evolução do Pib (Mil Reais)",
  legend: "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais).",
  palavraschave: "valor pib,canaa dos carajas,curionopolis,eldorado do carajas,parauapebas"
},
{
  categoria: "PIB",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMjQ0MWMyMTktZTQ1Ny00MDUxLTk0MmYtOWY5ZDIxYzY2MzIzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual do PIB de Parauapebas e Microrregião",
  legend: "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais).",
  palavraschave: "canaa dos carajas,curionopolis,eldorado do carajas,parauapebas"
},
{
  categoria: "PIB",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYWE2YjEyNzgtODNmMS00Y2JkLWE0YzgtMjliMzk1MzdhNzM4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Valor Adicionado",
  legend: "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais).",
  palavraschave: "valor pib,canaa dos carajas,curionopolis,eldorado do carajas,parauapebas"
},
{
  categoria: "PIB",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZmIwNGVmZWUtNTdjOC00YWEyLWE1YTctYzY1M2E3Mzc4MTY5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection9c4499242c01db74c377",
  titulobi: "Percentual por Atividade Econômica",
  legend: "* Fonte:PIB <br/>*PIB - Produto Interno Bruto a preços correntes (Mil Reais).",
  palavraschave: "industria,servico,administracao,agropecuaria"
},

{
  categoria: "Receitas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNzZkMjUxMmEtZDhjMy00NmQ4LTg5ZTgtNDc3OTRlZjRlY2YwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Receita Arrecadada",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "unidade gestora,especificacao"
},
{
  categoria: "Receitas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYjZiMmIxMmQtZDRjYi00NjUxLTg4MzEtNmMzMjM5MzZlNzQxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Rank por Especificação",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "unidade gestora,especificacao"
},
{
  categoria: "Receitas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYjEwOTMwOTAtY2QxMi00MjAzLWJiNzAtMTZiMGYyYWZiNzM2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Comparativo da Arrecadação por Mês e Ano",
  legend: "* Fonte: ASPEC-PMP.",
  palavraschave: "unidade gestora,especificacao"
},
{
  categoria: "Agua",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNzU2YThiZWEtN2UwMS00ZWQzLWEwNjYtYzRjZTQ2ODI4Y2E1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Abastecimento de Água de Parauapebas",
  legend: "* Fonte:SNIS <br/> * Volume Tratada ETA é expresso em metros cúbicos(m³) <br/>* Volume Consumido é expresso em metros cúbicos (m³). <br/>* 1 m³= 1000 L",
  palavraschave: "volume tratada eta,volume consumido,populacao atendida,ligacoes ativas"
},
{
  categoria: "Agua",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNDBjODU4MjYtNmU4OC00ZDU2LWIzZTQtZDAwNGIzOWRkNzNlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78",
  titulobi: "Comparativo - Água Consumida X  Água Tratada de Parauapebas",
  legend: "* Fonte:SNIS <br/> * Volume Tratada ETA é expresso em metros cúbicos(m³) <br/>* Volume Consumido é expresso em metros cúbicos (m³). <br/>* 1 m³= 1000 L",
  palavraschave: "volume tratada eta,volume consumido"
},
{
  categoria: "Agua",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMWRjYzRmODQtODJhZS00NjMyLWEyN2MtMzBlYTIyMjQ4NmJjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78",
  titulobi: "Evolução da População Atendida de Parauapebas",
  legend: "* Fonte:SNIS",
  palavraschave: "populacao atendida"
},
{
  categoria: "Agua",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNTVkZGUyOGQtYmQ4Yy00YTc0LWI1MGMtODFlZTIxZWQ5NTZiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78",
  titulobi: "Evolução da População Urbana e Rural Atendida de Parauapebas",
  legend: "* Fonte:SNIS",
  palavraschave: "populacao rural,populacao urbana"
},
{
  categoria: "Agua",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTVkOTA5ZTgtYWQzMi00NmExLWI0ZDMtZDlkOTA5OTUzMWU2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection550825650624ca04523d",
  titulobi: "Comparativo de População Atendida por Município",
  legend: "* Fonte:SNIS",
  palavraschave: "agua azul do norte,canaa dos carajas,curionopolis,eldorado do carajas,parauapebas"
},
{
  categoria: "Agua",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZTlmNjgxNzktNDEwMy00ZDA5LWI1ZDgtMTk3MTU5ZGRiZmQ2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection550825650624ca04523d",
  titulobi: "Tabela Abastecimento de Água por Município",
  legend: "* Fonte:SNIS <br/> * Volume Tratada ETA é expresso em metros cúbicos(m³) <br/>* Volume Consumido é expresso em metros cúbicos (m³). <br/>* 1 m³= 1000 L",
  palavraschave: "populacao atendida,populacao rural atendida,populacao urbana atendida,volume de agua consumida,volume de agua tratada,ligacoes ativas"
},
{
  categoria: "Esgoto",
  url: "https://app.powerbi.com/view?r=eyJrIjoiOTFmZTczY2MtNmEwOC00ODJkLWI1NWEtMmE2ZmU0NzU5MGRhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Serviço de Esgoto de Parauapebas",
  legend: "* Fonte: SNIS. <br/> ** O metro cúbico (símbolo: m3) é uma unidade de medida de volume equivalente a mil litros.",
  palavraschave: "populacao atendida,esgoto coletado,esgoto tratado"
},
{
  categoria: "Esgoto",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNWMxYjZjOTktZDhlNC00NjIyLWJhMzMtNGY0NTk0YTVhNzg5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Comparativo Esgoto Coletado X Tratado de Parauapebas",
  legend: "* Fonte: CAGED.",
  palavraschave: "esgoto coletado,esgoto tratado"
},
{
  categoria: "Esgoto",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYmIxYzAxNTAtNDlmYi00NzUzLTg2MjMtZDE1MTZlNTY4ZDBhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Evolução de População Atendida de Parauapebas",
  legend: "* Fonte: CAGED.",
  palavraschave: "pessoas atendidas"
},
{
  categoria: "Esgoto",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMjlhMDJiZjYtNjBmMS00MzRlLTg2NTktMjFmZjQxMjMzMmJkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Ranking Por Município",
  legend: "* Fonte: SNIS. <br/> ** Somente os municípios de Parauapebas alimentam seus dados de Esgotos na fonte SNIS",
  palavraschave: "parauapebas,maraba"
},
{
  categoria: "Esgoto",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMzcyYzFjZDAtZGYyOS00MjYzLWE1NDUtOGQ5MWQ5MGVmNTFhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Serviço de Esgoto de Parauapebas e Região",
  legend: "* Fonte: CAGED.",
  palavraschave: "populacao atendida,esgoto coletado,esgoto tratado"
},
{
  categoria: "Iluminacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiODU3MGQxNzQtN2IyOC00ODJhLTljNDctY2ExMzgzYmNjN2E2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Lâmpadas",
  legend: "* Fonte: SEMURB.",
  palavraschave: "lampadas,"
},
{
  categoria: "Iluminacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYTI5OWIyOTItNTAyNS00OTU0LTkxNzktZWNiMGVmMGQ1MTViIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Composição de Iluminação",
  legend: "* Fonte: SEMURB.",
  palavraschave: "led,outras"
},
{
  categoria: "Iluminacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMWVkNTkxNTMtNmQzZi00ZTU4LTg3ZjktYjc5ZDU0NDE5ZDYyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Pontos de Iluminação",
  legend: "* Fonte: SEMURB.",
  palavraschave: "bairro"
},
{
  categoria: "Lixo",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZmMzZjMxNDctNmNjZC00NTNmLWEwMGMtODM2NDQ1N2IxYTYwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Comparativo da População Atendida por Município",
  legend: "* Fonte: SNIS.",
  palavraschave: "maraba,parauapebas,canaa dos carajas,eldorado dos carajas"
},
{
  categoria: "Lixo",
  url: "https://app.powerbi.com/view?r=eyJrIjoiOGY0YzkzNzAtZDk5OS00ZjFmLTg0YTYtMzc1NmE0YTM1NmE1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Evolução da População Atendida por Município",
  legend: "* Fonte: SNIS.",
  palavraschave: "maraba,parauapebas,canaa dos carajas,eldorado dos carajas"
},
{
  categoria: "Lixo",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNTVlYTAzYTktYWE2MC00OGEwLWJlNDYtZTk5NDBjYjQ4YzcxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Série Histórica de Resíduos Sólidos por Município",
  legend: "* Fonte: SNIS.",
  palavraschave: "maraba,parauapebas,canaa dos carajas,eldorado dos carajas"
},
{
  categoria: "Lixo",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTBjM2E5MjItMTgzNy00YTgyLWI1ODktNzlmZmZlMWYzODY3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Coleta de Resíduos Sólidos por Município",
  legend: "* Fonte: SNIS.",
  palavraschave: "maraba,parauapebas,canaa dos carajas,eldorado dos carajas"
},

{
  categoria: "Queimadas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNmIyZDMzZGUtYTU1Ni00ZjM0LTgxMzEtYWVjMDMwMWNlODdiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Nº de Ocorrências por Intervalo de Horário",
  legend: "* Fonte:Defesa Civil de Parauapebas",
  palavraschave: "ocorrencias"
},
{
  categoria: "Queimadas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNTYyMjBhOTItZTNjNi00ZDg0LTk3MmQtZDljOGQxMzFmNjgzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi:"Duração das Queimadas",
  legend: "* Fonte:Defesa Civil de Parauapebas",
  palavraschave: "duracao"
},
{
  categoria: "Queimadas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYzFjODcyNDctOTc5Yy00MDI2LWE3NjctOTEzZmE3M2U0YTg5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection60d6a435e7265195357a",
  titulobi: "Percentual de Queimadas por Zona",
  legend: "* Fonte:Defesa Civil de Parauapebas",
  palavraschave: "percentual, zona, queimadas"
},
{
  categoria: "Queimadas",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNzlkMzkzZWEtYzVjNi00ZjI1LTljZjctYmUzZjdlMjA2MTJjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection60d6a435e7265195357a",
  titulobi: "Raio X das Queimadas",
  legend: "* Fonte:Defesa Civil de Parauapebas",
  palavraschave: "mês, bairro, zona, hora, endereço"
},
{
  categoria: "Educacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZTJlY2IyYWUtNDk0NS00N2EzLWFjMGUtOTNlZmM1MzdiMjE0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8c64ac8101c870e23b35",
  titulobi: "Quantidade de Alunos e Escolas da Rede Municipal de Ensino",
  legend: "* FONTES: INEP e SEMED.",
  palavraschave: "endereco,professores,alunos,pedagogicos,colaboradores,escola"

},
{
  categoria: "Educacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNWNhOTU2YzMtYzNjZS00NjZmLWI2NjctNDhjZjVlZTU0ZjVhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Alunos e Escolas por Modalidade",
  legend: "* FONTES: INEP e SEMED.",
  palavraschave: "escolas,alunos,bairro"

},
{
  categoria: "Educacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYTdmYzU2ZmUtYmIxYS00MDdmLWJmNzgtNTU1ZGEyY2ZmYTBjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection",
  titulobi: "Percentual de Docentes por Modalidade.",
  legend: "* FONTES: INEP e SEMED. <br>** Clique no filtro para selecionar a  Modalidade de Ensino.",
  palavraschave: "modalidade,municipal,privada,educacao infantil,ensino fundamental"

},
{
  categoria: "Educacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMDc2OGQ3NjktM2RiNS00MzY5LWI5ZmUtZTQyZThmZWM2ZmUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection8789529805fa745856e2",
  titulobi: "Percentual de Docentes por Dependência Administrativa",
  legend: "* FONTES: INEP e SEMED. <br>** A Rede Pública Estadual inclui escolas públicas dos três níves de governo: federal, estadual e municipal. Clique no filtro para selecionar Série / Ano.",
  palavraschave: "dependencia administrativa,municipal,privada"

},
{

  categoria: "Educacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZWU0MWRkNTYtMTE5Yi00NDA2LWI2NzQtODUxYWNjOGRhOTMwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectionc82c7bdfe576755b358a",
  titulobi: "Índice de Desenvolvimento da Educação Básica de Parauapebas",
  legend: "* FONTES: INEP e SEMED. <br>**  Clique no filtro para selecionar Série / Ano.",
  palavraschave: "ano"
},
{

  categoria: "Educacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZjcwMTU2OTgtZDc1NC00NjA4LTgzYmUtOTFlMWViZjI1NWU5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSectione8b4ad7613be3a333204",
  titulobi: "Índice de Desenvolvimento da Educação Básica da Microrregião de Parauapebas",
  legend: "* FONTES: INEP e SEMED.",
  palavraschave: "serie,ano"

},
{
  categoria: "Populacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZjU2MzhiYjgtNzA5Ny00ODg0LTg5NDctYjdmMzM5ZTIyMTk1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Número de Eleitores",
  legend: "Fonte:TSE",
  palavraschave: "eleitores,ano"
},
{
  categoria: "Populacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNGNkNWM1NjAtMzMwYy00MzM3LWJjNjEtMDA1NTJjYmM5NTExIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "PIB per Capita",
  legend: "Fonte:IBGE",
  palavraschave: "pib per capita,ano,indice de desenvolvimento humano"
},
{
  categoria: "Populacao",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMDNiZGQ3ZTctNWVjNS00MTdhLWFhNTAtZTU2MTMzZDMwZGU5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Estimativa da População",
  legend: "Fonte:IBGE",
  palavraschave: "area territorial,densidade demografica,populacao estimada,domicilios particulares"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYWZkNDIyOWEtMjk1My00MmQ2LWIxMDEtZjdjODAwN2MzYmNlIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Estabelecimentos por Esfera",
  legend: "*Fonte:DATASUS",
  palavraschave: "esfera"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTRkMmJkYmYtMzNhNC00NDEzLTlkMzMtMTIwZmRjMzE1MDVjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Médicos por Àrea",
  legend: "*Fonte:DATASUS",
  palavraschave: "medico,area"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYTNhYmNlODUtOGM0OS00NmJiLTg3YzItYTdmOTVhMzQ2MWFmIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Óbitos por Sexo",
  legend: "*Fonte:DATASUS",
  palavraschave: "masculino,feminino"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYjFlNGI2MzYtYzFmOC00NTM2LWE3ODctNGZjY2RhYWFlOTNhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection5806eea11c9e7c0750a9",
  titulobi: "Quantidade de Óbitos por Local de Ocorrência",
  legend: "*Fonte:DATASUS",
  palavraschave: "local de ocorrencia"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNmNmMzFlNTUtZWVjNS00OWQ3LTg5OTEtNTQ2ODM1M2VlZjkzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Óbitos por Faixa Étaria",
  legend: "*Fonte:DATASUS",
  palavraschave: "faixa etaria"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMjI1OTViZTAtZWY5NS00Njg2LWJlMDgtYjI0Njg1ODc0MGM0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Nascidos Vivos por Consulta",
  legend: "*Fonte:DATASUS",
  palavraschave: "consulta,nascidos vivos"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMjFmN2I2ZjMtNmM3MS00NWFiLWJhYzMtNTEyNGFhMzZiMjZiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Nascidos Vivos por Idade",
  legend: "*Fonte:DATASUS",
  palavraschave: "nascidos vivos"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiM2FmZTNmZWQtNTc4Yi00MGQ1LTk1ZDAtYzFkZTVlYmI5ZDk3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Nascidos Vivos por Tipo Parto",
  legend: "*Fonte:DATASUS",
  palavraschave: "cesario,vaginal"
},
{
  categoria: "saude",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTNiMzJkN2YtYzMzNC00Njk4LWJmMzYtZTcxMzZlMTkwZTEwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Nascidos Vivos por Instrução da Mãe",
  legend: "*Fonte:DATASUS",
  palavraschave: "instrucao"
},
{
  categoria: "empregos",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTBkOTQ0MzMtYWVmZS00Y2I3LWFiNmUtZTRiMTUyZThkZWFhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantitativo de Empregos",
  legend: "* FONTE: Novo CAGED.",
  palavraschave: "admitidos,desligados,saldo,carteiras assinadas"

},
{
  categoria: "empregos",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNzJlNDg1Y2YtMzcxOC00ZjY0LTg1NTQtMjA2M2YwOTBjYzUzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Evolução de Admitidos e Desligados",
  legend: "* FONTE: Novo CAGED.",
  palavraschave: "admitidos,desligados"
},
{
  categoria: "empregos",
  url: "https://app.powerbi.com/view?r=eyJrIjoiOTlmYmYwMGQtMTljNi00ZTMyLTk5NjgtZjVmZDdlYTMwZDJjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Admissões por Grupo Econômico",
  legend: "* FONTE: Novo CAGED.",
  palavraschave: "grupo economico"
},
{
  categoria: "empregos",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNjI3MjI4OTktMDYzZS00YmRiLWJlOTQtZGI3ZDM4YjFlMThkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Admissões e Desligamentos",
  legend: "* FONTE: Novo CAGED.",
  palavraschave: "grupo economico,admissoes,desligamentos,setor economico"

},
{
  categoria: "empregos",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMWFiMmEwYzItYTUzNC00NzMxLTljNTItOTQ2NTQxMmFiMjIwIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Ranking por Municipio",
  legend: "* FONTE: Novo CAGED.",
  palavraschave: "parauapebas,maraba,canaa dos carajas,eldorado dos carajas"
},
{
  categoria: "empregos",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNGMwNWM4MjAtNjc3Yi00ZGUyLTk4YTctM2MyZGEwYzI2MDU1IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9&pageName=ReportSection6a19156f389c7f923d78",
  titulobi: "Admissões por sexo",
  legend: "* FONTE: Novo CAGED.",
  palavraschave: "admissoes,sexo,emprego,admitidos"
},
{
    categoria: "AtendimentoMulher",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYzVjNGZiY2QtNTE0ZC00NDkyLWIxZWMtMmUyMjQ3NzUwMDI2IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
    titulobi: "Quantidade de Usuárias Atendidas",
    legend: "* Fonte: SEMMU.",
    palavraschave: "usuarias,vitimas"
  },
  {
    categoria: "AtendimentoMulher",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMzhlODIyYjMtMDJmMi00M2UyLWFmNTMtZThjOWZkYWViMDhhIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
    titulobi: "Quantidade de Usuárias por Faixa Etária",
    legend: "* Fonte: SEMMU.",
    palavraschave: "faixa etaria, usuarias"
  },
  {
    categoria: "AtendimentoMulher",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZmNkMWI0MWYtNmRjZC00OWM2LTlmYzgtYjFlNzMwN2QxNjQ5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
    titulobi: "Quantidade de  Usuárias por Ano Escolar",
    legend: "* Fonte: SEMMU.",
    palavraschave: "usuarias,ano escolar"
  },
  {
    categoria: "AtendimentoMulher",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNTUxZTk4ODUtYWMxYS00OWUxLTgzNTAtZTU5MzMzZGM1OGI3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
    titulobi: "Quantidade de  Usuárias por Profissão",
    legend: "* Fonte: SEMMU.",
    palavraschave: "usuarias,profissao"
  },
  {
    categoria: "AtendimentoMulher",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNmM5ZDIzODItMWRlMy00ZDRlLWEzMjctMDBkZGE0ZjdmN2M3IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
    titulobi: "Quantidade de  Usuárias por Tipo de Atendimento",
    legend: "* Fonte: SEMMU.",
    palavraschave: "usuarias,atendimento"
  },
  {
    categoria: "AtendimentoMulher",
    url: "https://app.powerbi.com/view?r=eyJrIjoiM2Q1NGNiZDQtNzM1OS00OTdkLWE2OGUtNTc0Mjg0NGNmZTEzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
    titulobi: "Quantidade de  Usuárias por Curso",
    legend: "* Fonte: SEMMU.",
    palavraschave: "usuarias,curso"
  },
{
    categoria: "urbanismoMaps",
    url: "https://map.vm2info.com/parauapebas/2092",
    titulobi: "Bairros de Parauapebas",
    legend: "* FONTE:SEMURB.",
    palavraschave: "bairros, ruas, pedestres,carros,infrastrutura,mapa"
  },
 

  
  {
    categoria: "patrimonioMaps",
    url: "https://map.vm2info.com/parauapebas/2099",
    titulobi: "Praças",
    legend: "FONTE:SEMURB.",
    palavraschave: "pracas,mapa"
  },
  
  {
    categoria: "urbanismoMaps",
    url: "https://map.vm2info.com/parauapebas/2095",
    titulobi: "Plano Diretor",
    legend: "* FONTE:SEPIM.",
    palavraschave: "bairro,rua,logradouro,mapa"
  },
  
  {
    categoria: "urbanismoMaps",
    url: "https://map.vm2info.com/parauapebas/2097",
    titulobi: "Rotas de Varrição",
    legend: " FONTE:SEMURB.",
    palavraschave: "bairro,rua,logradouro,mapa"
  },
  
  {
    categoria: "meioambienteMaps",
    url: "https://map.vm2info.com/parauapebas/2101",
    titulobi: "Áreas de risco",
    legend: " FONTE:DEFESA CIVIL.",
    palavraschave: "area, risco,mapa"
  },
  
  {
    categoria: "meioambienteMaps",
    url: "https://map.vm2info.com/parauapebas/2096",
    titulobi: "Terra indígena",
    legend: " FONTE:SEMTUR.",
    palavraschave: "indigena, terra,mapa"
  },
  
  {
    categoria: "meioambienteMaps",
    url: "https://map.vm2info.com/parauapebas/2094",
    titulobi: "Aldeias Indígenas",
    legend: " FONTE:SEMTUR.",
    palavraschave: "aldeias,indigenas,mapa"
  },
  
  {
    categoria: "patrimonioMaps",
    url: "https://map.vm2info.com/parauapebas/2100",
    titulobi: "Escolas",
    legend: " FONTE:SEMED.",
    palavraschave: "escolas,rua,bairro,logradouro,mapa"
  },
  
  {
    categoria: "patrimonioMaps",
    url: "https://map.vm2info.com/parauapebas/2102",
    titulobi: "UBS",
    legend: " FONTE:SEMSA.",
    palavraschave: "unidade,saude, basica,bairro,rua,logradouro,mapa"
  },
  
  {
    categoria: "infraestruturaMaps",
    url: "https://map.vm2info.com/parauapebas/2093",
    titulobi: "Abastecimento de água",
    legend: "* FONTE:SAAEP.",
    palavraschave: "agua,bairro,rua,logradouro,mapa"
  },

  {
    categoria: "infraestruturaMaps",
    url: "https://map.vm2info.com/parauapebas/2103",
    titulobi: "Semáforos de Parauapebas",
    legend: "FONTE:SEMURB.",
    palavraschave: "semaforo,mapa"
  },
  
  {
    categoria: "infraestruturaMaps",
    url: "https://map.vm2info.com/parauapebas/2104",
    titulobi: "Radares de Parauapebas",
    legend: "* FONTE:SEMSI.",
    palavraschave: "radares,ruas,logradouro,bairro,mapa"
  },
  
  {
    categoria: "infraestruturaMaps",
    url: "https://map.vm2info.com/parauapebas/2098",
    titulobi: "Redes de esgoto",
    legend: "* FONTE:SAAEP.",
    palavraschave: "esgoto,rua,bairro,logradouro,mapa"
  },
  {
    categoria: "saudeMaps",
    url: "https://map.vm2info.com/parauapebas/2112",
    titulobi: " Doenças Epidemiológicas ",
    legend: "* FONTE:SEMSA.",
    palavraschave: "doencas,rua,bairro,logradouro,mapa"
  },
  {
    categoria: "turismoMaps",
    url: "https://map.vm2info.com/parauapebas/2120",
    titulobi: "Rota das Águas",
    legend: "* FONTE:SEMTUR.",
    palavraschave: "agua,rota,mapa"
  },
  {
    categoria: "turismoMaps",
    url: "https://map.vm2info.com/parauapebas/2121",
    titulobi: "Rota Carajás",
    legend: "* FONTE:SEMTUR.",
    palavraschave: "carajas,rota,mapa"
  },  
  {
    categoria: "turismoMaps",
    url: "https://map.vm2info.com/parauapebas/2122",
    titulobi: "Rota dos Búfalos",
    legend: "* FONTE:SEMTUR.",
    palavraschave: "bufalos,rota,mapa"
  },

  {
    categoria: "turismoMaps",
    url: "https://map.vm2info.com/parauapebas/2123",
    titulobi: "Rota indígena",
    legend: "* FONTE:SEMTUR.",
    palavraschave: "indigena,rota,mapa"
  },
  
  {
    categoria: "turismoMaps",
    url: "https://map.vm2info.com/parauapebas/2124",
    titulobi: "Rota City Tour",
    legend: "*FONTE:SEMURB.",
    palavraschave: "city,tour,rota,cidade,mapa"
  },
  
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiNWM0MDY5MDYtMjZhMy00YTEyLWE0N2QtZjcyNmY0NjkzOTc5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Acidentes em Parauapebas",
  legend: "* FONTE: DMTT. ",
  palavraschave: "acidentes,bairro"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMTNmM2YzM2UtMmQ4NC00MDMyLWJmMjktYmQ4YTFkZjUwYTNjIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Acidentes por Tipo em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "tipo de acidente,bairro"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZDEyMWUyOGQtYjJhMS00NjRhLWJhNGQtNTgwNWFhYzJiNmU0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Série Histórica de Acidentes por Severidade em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "severidade"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiOWIxNDNlNGUtNjkzNS00ZTMwLWFiMDktYjM5ZTA0NmFjZGQ0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Ranking de Acidentes por Bairro de Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "bairro"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMWZmZWFkMzktMDRmOS00MGE3LTg0NzktYmJhY2E3MzAyMGNiIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual de Acidentes por Severidade em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "carro,moto,semaforo"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZTRkOTE0MmUtYTU0Ni00MWFhLTg3ZjItNDI2ZWY0NDYwN2MyIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual de Acidentes por Condição do Tempo em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "severidade"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiOGMxMWQ0NzktZGM1Ni00MzdmLTlkNmEtZWI0Yzk3ZTg1YzA4IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual de Acidentes por Sinalização Horizontal em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "tempo"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYWI1MTEzY2EtNzlmZi00YjM5LTlmZGYtYjExOTc5MzZjMGI5IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual de Acidentes por Sinalização Vertical em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "sinalizacao horizontal"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYzY3ZmZlYzUtMTI3MC00ZmU0LWJjMDItZmU4ZDIzOGNhYTQ0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual de Acidentes por Sexo em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "sinalizacao vertical"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZjI2YjE4YTEtYzMxYi00YWE4LWE4MWUtZjllZDVlYTM5OGE0IiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Percentual de Acidentes por Tipo Veículo em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "sexo"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiYzgyZDMzNGItNjEzMS00N2M1LTk2YTktZjU2ODY5ZjY5MGMzIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Quantidade de Acidentes por Faixa Etária em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "tipo veiculo"
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiMjc4YTRiOGUtMGE1OS00MzAxLWE4MjYtNTE1NjViNjFmYjkxIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Radares e Semáforos em Parauapebas",
  legend: "* FONTE: DMTT.",  
  palavraschave: "radares,semaforos" 
},
{
  categoria: "Transito",
  url: "https://app.powerbi.com/view?r=eyJrIjoiZWMyOGEzNmEtZThiMy00MTkwLWFlOTgtMDYyM2NmODIwYjZkIiwidCI6ImYxMTMzMGMxLTFmNDgtNDUyMi05YTBkLWM0ZDdjZmU1ZGY5NiJ9",
  titulobi: "Mapa de Radares e Semáforos em Parauapebas",
  legend: "* FONTE: DMTT.",
  palavraschave: "radares,semaforos,tipo"  
},

];

export default initialDetails;