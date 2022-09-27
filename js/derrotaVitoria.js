function vitoria() {
    escreveVoceVenceu()
    pincel.beginPath()
    pincel.fillStyle = '#1c3e8a';
    pincel.font = "bold 30px 'Inter'";
    pincel.fillText('Parabéns, ', 405, 110);
    pincel.fillText('Vamos jogar de novo? ', 405, 160);
    pincel.fillText("se quiser parar de jogar é só clicar em desistir.", 405, 210);
    setTimeout(iniciaJogo, 5000)
  }

  function escreveVoceVenceu(){
    pincel.beginPath()
    pincel.font = "bold 30px 'Inter' ";
    pincel.fillStyle = '#9AEBA3';
    pincel.fillText('VOCÊ VENCEU!', 550, 110)
    
  }
  
  function derrota() {
    escrevePalavraSecreta();
    pincel.beginPath()
    pincel.fillStyle = '#13678A';
    pincel.font = "bold 30px 'Inter'";
    pincel.fillText('Você perdeu! A palavra era:', 405, 110);
    pincel.fillText('Vamos jogar de novo?', 405, 160);
    pincel.fillText("se quiser parar de jogar é só clicar em desistir.", 405, 210);
    setTimeout(iniciaJogo, 5000)
    
  }
  
  function escrevePalavraSecreta() {
    pincel.beginPath()
    pincel.font = "bold 30px 'Inter'";
    pincel.fillStyle = '#FF7D12';
    pincel.fillText(palavraSecreta, 802,110);
  }