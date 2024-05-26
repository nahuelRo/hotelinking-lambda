export const generateHtmlResponse = (name: string): string => {
    return `
      <html>
          <body style="height: 98vh; display: flex; justify-content: center; align-items: center; background-color: #222;">
              <h1 style="color: #fff;" id="greeting">Cargando...</h1>

              <script>
                document.getElementById('greeting').innerHTML = 'Hola ${name}, la hora actual es ' + new Date().toLocaleTimeString();
             </script>
          </body>
      </html>
  `;
};
