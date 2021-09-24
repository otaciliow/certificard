const listaFilmes = ['https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg','https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg','https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg']
for (x=0;x<listaFilmes.length;x++) {
    document.write('<img src=' + listaFilmes[x] + '>');
}