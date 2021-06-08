export default function Test(props) {
  console.log(props);
  return <div>Testing...</div>;
}

//Exemplo de utilização de props:

// eslint-disable-next-line no-lone-blocks
{
  /* <Test
  number={10}
  string="Teste"
  visible
  data={{ a: 1, b: 2 }}
  onClick={() => {
    console.log('click');
  }}
/> */
}
