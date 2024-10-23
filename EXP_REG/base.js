const texto =
 `João trouxe flores para sua amada namorada em 10 de Janeiro de 1970, Maria era o nome dela.


 Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
 luiz, hoje sua exposa, ainda faz aquele café com pão e queijo nas tardes de domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.
 Não canso de ouvir a Maria:

 "Jooooooooãoooo, o café tá prontinho aqui. Veeeemm"!

`;

const arquivos = ['Atenção.jpg', 'FOTO.jpeg', 'Meu gatinho.jpg', 'Meu gatinho.JPG','Meu gatinho.JPEeeeeEEEeeeEEG', 'Marido.png','lista de compras.txt']



const html = '<p>Olá mundo</p> <p>Olá de novo</p> <a>dwadwa</a>';
const html2 = '<p  data-teste="teste" class="teste teste">Olá mundo</p> <div>Sou a div</div>';


const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ  atenção  abcdefghijklmnopqrstuvwxyz @ 0123456789   '

const cpfs = `  
Os CPFs são:
    254.224.877-45 215.334.871-12 046.253.375-96
`
const cpfs2=`
254.224.877-45
215.223.336-77
013.993.451-12
115.233.116-32

`

const ips= `
Os Ips são:

0.0.0.0
192.168.0.25
10.10.5.12
255.255.255.255

`
const lookahead= `
ONLINE 192.168.0.1 ABCDEF inactive
OFFLINE 192.168.0.2 ABCDEF active
ONLINE 192.168.0.3 ABCDEF active
ONLINE 192.168.0.4 ABCDEF active
OFFLINE 192.168.0.5 ABCDEF active
OFFLINE 192.168.0.6 ABCDEF inactive

`

module.exports = {
    texto,
    arquivos,
    html,
    html2,
    alfabeto,
    cpfs,
    cpfs2,
    ips,
    lookahead,
    
}