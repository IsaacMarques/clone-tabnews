function Home(){
    return (
    <>
      {/* Meta viewport pra ficar perfeito no celular */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Estilos globais + animação dos corações */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          background: linear-gradient(135deg, #ffeef8, #f8dfff);
          font-family: 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
          position: relative;
        }

        .heart {
          position: absolute;
          font-size: 30px;
          opacity: 0.6;
          pointer-events: none;
          animation: fall linear infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Conteúdo principal */}
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-full rounded-3xl bg-white/85 p-10 text-center shadow-2xl backdrop-blur-sm">
          <h1 className="mb-6 text-3xl font-bold text-pink-600 md:text-4xl">
            Mozonis ♡
          </h1>
          <p className="mb-4 text-lg leading-relaxed md:text-xl">
            eu subi esse site enquanto você dormia! hehehehe
          </p>
          <p className="mb-4 text-lg leading-relaxed md:text-xl">
            meu objetivo é conseguir tirar um riso seu, se der certo me fala!
          </p>
          <p className="mb-4 text-lg leading-relaxed md:text-xl">
            Dorme com Deus
          </p>
          <p className="mb-6 text-lg font-semibold md:text-xl">
            Te amo muitooo
          </p>
          <div className="text-4xl md:text-5xl">❤️💕💜💗💖💘</div>
        </div>
      </div>

      {/* Script dos coraçõezinhos caindo */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function createHeart() {
              const heart = document.createElement('div');
              heart.className = 'heart';
              heart.innerHTML = ['❤️','💕','💜','💗','💖','💘'][Math.floor(Math.random()*6)];
              heart.style.left = Math.random() * 100 + 'vw';
              heart.style.animationDuration = Math.random() * 5 + 5 + 's';
              document.body.appendChild(heart);

              setTimeout(() => heart.remove(), 10000);
            }
            setInterval(createHeart, 800);
            // Cria alguns logo de cara
            for(let i = 0; i < 10; i++) setTimeout(createHeart, i * 300);
          `,
        }}
      />
    </>
  );
}

export default Home;