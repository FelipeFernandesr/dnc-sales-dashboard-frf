import { Link } from "react-router-dom"
//Components
import { 
  AvatarsList, 
  CardComponent, 
  CustomChart, 
  CustomTable, 
  Header, 
  StyledH2, 
  StyledH3, 
  StyledSpan 
} from "@/components";
import { Container, Grid } from "@mui/material";


//HOOKS
import { useGet } from "@/hooks";

//UTILS
import { currencyConverter, hilightsTextConverter } from "@/utils";

//TYPES
import { HighlightsData, StarsData, NewsData, CustomChartProps } from "@/types";

function Home() {
    const {
      data: highlightsData,
      loading: highlightsLoading,
      error: highlightsError,
    } = useGet<HighlightsData[]>('sales/highlights')

    const {
      data: salesMonthData,
      loading: salesMonthLoading,
      error: salesMonthError,
    } = useGet<CustomChartProps>('sales/month')

    const {
      data: salesStarsData,
      loading: salesStarsLoading,
      error: salesStarsError,
    } = useGet<StarsData[]>('sales/stars')

    const {
      data: newsData,
      loading: newsLoading,
      error: newsError,
    } = useGet<NewsData[]>('news')

    const {
      data: salesYearData,
      loading: salesYearLoading,
      error: salesYearError,
    } = useGet<CustomChartProps>('sales/year')
    
    return (
      <>
        <Header />
        <Container className="mb-2" maxWidth="lg">
          <Grid container spacing={4}>
            {!highlightsError && (
                <>
                  <Grid item xs={12} md={4}>
                    
                    <CardComponent id="total-sales" className={
                        highlightsLoading 
                        ? 'skeleton-loading skeleton-loading-mh-1' 
                        : ''
                      }
                    >
                      {!highlightsLoading && highlightsData && (
                        <>
                          <StyledH2 className="mb-1">Total de vendas no mês</StyledH2>
                          <StyledH3 className="mb-1" size={40} lineheight={40}>{currencyConverter(highlightsData[0].value)}</StyledH3>
                          <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                        </>
                      )}
                      
                    </CardComponent>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CardComponent id="month-goals" className={
                      highlightsData ? highlightsData[1].subtitle : 'skeleton-loading skeleton-loading-mh-1'
                    }>
                      {!highlightsLoading && highlightsData && (
                        <>
                          <StyledH2 className="mb-1" color="white">Meta do mês</StyledH2>
                          <StyledH3 className="mb-1" size={40} lineheight={40} color="white">{currencyConverter( highlightsData[1].value )}</StyledH3>
                          <StyledSpan color="white">{hilightsTextConverter(highlightsData[1].subtitle)}</StyledSpan>
                        </>
                      )}
                    </CardComponent>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CardComponent id="total-leads" className={highlightsLoading ? 'skeleton-loading skeleton-loading-mh-1' : ''}>
                      {!highlightsLoading && highlightsData && (
                          <Link to="/leads">
                            <StyledH2 className="mb-1">Leads contactados</StyledH2>
                            <StyledH3 className="mb-1" size={40} lineheight={40} >{highlightsData[2].value}</StyledH3>
                            <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                          </Link>
                      )}
                    </CardComponent>
                  </Grid>
                </>
              )
            }
            
            <Grid item xs={12} md={7}>
              {
                !salesMonthError && (
                  <CardComponent id="month-sales-chart" className={salesMonthLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                    {
                      !salesMonthLoading && salesMonthData && (
                        <>
                          <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
                          <CustomChart
                            labels={salesMonthData.labels.map((label) => label)}
                            data={salesMonthData.data.map((data) => data)}
                            type={salesMonthData.type}
                          />
                        </>
                      )
                    }
                    
                  </CardComponent>
                )
              }
              
            </Grid>
            <Grid item xs={12} md={5}>
              {!salesStarsError && (
                  <CardComponent id="month-sales-chart" className={salesStarsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                    {
                      !salesMonthLoading && salesStarsData && (
                        <>
                          <StyledH2 className="mb-1">Maiores vendedores do mês</StyledH2>
                          <AvatarsList listData={salesStarsData.map((star) => ({
                              avatar: '/dnc-avatar.svg',
                              name: star.name,
                              subtitle: currencyConverter(star.value),
                            }))
                          }/>
                        </>
                      )
                    }
                  </CardComponent>
                )
              }
            </Grid>
            <Grid item xs={12} md={5}>
              {
                !newsError && (
                  <CardComponent id="news" className={salesStarsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                    {
                      !newsLoading && newsData && (
                        <>
                          <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
                          <CustomTable 
                            headers={['Titulo', 'Horário']}
                            rows={newsData.map((news) => [
                              <a className='ellipsis ellipsis-sm' href={news.link} target='_blank'>
                                {news.title}
                              </a>,
                              <a href={news.link} target='_blank'>
                                {news.date}
                              </a>
                            ])}
                          />
                        </>
                      )
                    }
                  </CardComponent>
                )
              }
            </Grid>
             <Grid item xs={12} md={7}>
             {
                !salesYearError && (
                  <CardComponent id="year-sales-chart" className={salesYearLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                    {
                      !salesYearLoading && salesYearData && (
                        <>
                          <StyledH2 className="mb-1">Valor de vendas por mês</StyledH2>
                          <CustomChart
                            labels={salesYearData.labels.map((label) => label)}
                            data={salesYearData.data.map((data) => data)}
                            type={salesYearData.type}
                          />
                        </>
                      )
                    }
                    
                  </CardComponent>
                )
              }
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
  
  export default Home