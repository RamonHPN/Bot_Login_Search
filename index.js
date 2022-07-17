const puppeteer = require('puppeteer');

console.log('Bem vindo Ramon');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  //O endereço da página usada no teste
  await page.goto('https://www.americanas.com.br');
  
  //Após entrarmos no site, clicamos no icone de login
  await page.click('[class="login__Container-sc-rx2iwu-0 kQfRzB"]');
  
  //Clicamos em ENTRAR para logarmos
  await page.click('[class="tooltip-login__Login-sc-1caicti-2 grDmK"]');

  //Selecionamos e preenchemos os campos com os dados
  await page.waitForSelector('#email-input');

  //Campo de email. Coloque o seu email no lugar para testar
  await page.type('#email-input', 'example@example.com', {delay: 100});
  
  //Campo de senha. Coloque a sua senha no lugar
  await page.type('#password-input', 'example000', {delay: 100});
  
  //Click no botão de continuar
  await page.click('#login-button'); 

  //Esperamos um pouco
  await page.waitForNavigation();

  //Selecionamos o campo de busca de produtos
  await page.waitForSelector('[name="conteudo"]');

  //Clicamos no campo em questão
  await page.click('[name="conteudo"]');   

  //Preechemos com o produto que desejamos buscar
  await page.type('[name="conteudo"]', 'pc gamer', {delay: 100});

  //Clicamos na lupa para efetuar a busca
  await page.click('[class="search__SearchButtonUI-sc-1wvs0c1-4 laEttB"]');
  
  //Essa parte aqui serve para fechar quando todas as instruçoes forem seguidas
  //mas não preciso disso agora
  //await browser.close();
})();

