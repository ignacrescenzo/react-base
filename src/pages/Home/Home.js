import React from 'react'
import useStyles from './styles'
import test from '../../test.json'
function Home () {
  const classes = useStyles()
  // React.useEffect(() => {
  //   const ar = test[0]
  //   const array = []
  //   // console.log(ar)
  //   ar.filter(a => a.clasification).forEach(item => {
  //     const code = item.clasification + item.cod
  //     window.setInterval(() => {
  //       window.fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAoWkoyvj8ev5iHj01aOw4VNVxmJ-ZP9tI&components=postal_code:${code}|country:AR`)
  //         .then(res => res.json())
  //         .then(res => {
  //           array.push(res)
  //         })
  //     }, 500)
  //   })
  //   console.log(array)
  // }, [])
  return <h2 className={classes.title}>Home</h2>
}

export default Home
