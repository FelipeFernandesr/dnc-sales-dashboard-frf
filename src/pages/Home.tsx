import { CardComponent, Header } from "@/components"
import { Container } from "@mui/material"

function Home() {

    return (
      <>
        <Header />
        <Container maxWidth="lg">
          <CardComponent>CARD</CardComponent>
        </Container>
      </>
    )
  }
  
  export default Home