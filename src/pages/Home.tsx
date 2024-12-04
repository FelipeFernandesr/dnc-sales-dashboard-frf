import { AvatarsList, CardComponent, CustomTable,CustomChart, Header } from "@/components"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"

function Home() {
    const mockListData = [
      {
        avatar: 'dnc-avatar.svg',
        name: 'Nome Sobrenome 1',
        subtitle: currencyConverter(4234.54),
      },
      {
        avatar: 'dnc-avatar.svg',
        name: 'Nome Sobrenome 2',
        subtitle: currencyConverter(3334.14),
      },
      {
        avatar: 'dnc-avatar.svg',
        name: 'Nome Sobrenome 3',
        subtitle: currencyConverter(2264.74),
      },
    ]

    const mockTableData = {
      headers: ['Name','Email','Actions'],
      rows: [
        [
          <span>Nome 1</span>,
          <span>nome1@email.com</span>,
          <button>ACTION</button>
        ],
        [
          <span>Nome 2</span>,
          <span>nome2@email.com</span>,
          <button>ACTION</button>
        ],
        [
          <span>Nome 3</span>,
          <span>nome3@email.com</span>,
          <button>ACTION</button>
        ]
      ]
    }

    return (
      <>
        <Header />
        <Container maxWidth="lg">
          <CardComponent>CARD</CardComponent>
          <CardComponent>
            <AvatarsList listData={mockListData}/>
          </CardComponent>
          <CardComponent>
            <CustomTable 
              headers={mockTableData.headers}
              rows={mockTableData.rows}
            />
          </CardComponent>
          <CardComponent>
            <CustomChart
              labels={['jan','fev','mar','abr','mai']}
              data={[1000.12,2046.54,986.32,654.89,754.89,154.89]}
              type="bar"
            />
          </CardComponent>
        </Container>
      </>
    )
  }
  
  export default Home