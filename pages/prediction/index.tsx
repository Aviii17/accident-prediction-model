import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import { useAccident } from '../../context/accidentContext'

const Dropdown = ({
  title,
  value,
  setValue,
  data,
  inputType,
  loading,
}: {
  title: string
  data: Array<any>
  value: any
  setValue: (val: any) => void
  inputType: React.HTMLInputTypeAttribute
  loading: boolean
}) => {
  const [open, setopen] = useState(false)

  useEffect(() => {
    value && setopen(true)
  }, [value])

  return (
    <div
      className="input-wrapper"
      onFocus={() => setopen(true)}
      onMouseLeave={() => setopen(false)}
    >
      <label>{title}</label>
      <input
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {open && (
        <div className="childrens">
          {loading ? (
            <p>Loading</p>
          ) : data && data.length > 0 ? (
            <Fragment>
              {data
                .filter((v, i) => data.indexOf(v) == i)
                .map((item, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setValue(item)
                      setopen(false)
                    }}
                  >
                    {item}
                  </p>
                ))}
            </Fragment>
          ) : (
            <p>Data not found</p>
          )}
        </div>
      )}
    </div>
  )
}

const Prediction = () => {
  const [address, setaddress] = useState('')
  // const [weather_condition, setweather_condition] = useState('')
  // const [date, setdate] = useState('')
  // const [light_condition, setlight_condition] = useState('')
  // const [visibility, setvisibility] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const { list } = useAccident()
  const router = useRouter()

  const handlePredict = () => {
    if (
      !address ||
      !data ||
      data.length === 0 ||
      !data[0] ||
      !(data[0] as any)._id
    )
      return router.push(`prediction/not-found`)
    router.push(`prediction/${(data[0] as any)._id}`)
  }

  const fetchData = () => {
    setLoading(true)
    const result: any = list.filter((item: any) => {
      let match = false

      // Search Filter Logic
      if (address && item.address) {
        const addressArr = address
          .toLowerCase() // coverts to small case
          .replace(/[^A-Z0-9]+/gi, '_') // replaces all symbols to underscore "_"
          .split('_') // splits based on underscore
          .filter((v) => v !== '') // Trims and sanitize empty selections

        // Matches every selected word in given list
        match = addressArr.every((add) =>
          item.address.toLowerCase().includes(add)
        )
      }

      // if (weather_condition) {
      //   match = item.weather_condition === weather_condition
      // }

      // if (light_condition) {
      //   match = item.light_condition === light_condition
      // }

      // if (Number(visibility)) {
      //   match = Number(item.visibility) === Number(visibility)
      // }

      // if (date) {
      //   match = item.date === date
      // }

      return match
    })
    setData(result && result.length > 0 ? result : !address ? list : [])
    return setLoading(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData()
    }, 500)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    address,
    // weather_condition, date, light_condition, visibility
  ])

  return (
    <Fragment>
      <NavBar />
      <div className="predition-wrapper">
        <Dropdown
          title="LOCATION"
          value={address}
          setValue={setaddress}
          inputType="text"
          data={data && data.map((item: any) => item.address)}
          loading={loading}
        />
        {/* <div className="prediction-grid">
          <Dropdown
            title="DATE"
            value={date}
            setValue={setdate}
            inputType="text"
            data={data && data.map((item: any) => item.date)}
            loading={loading}
          />

          <Dropdown
            title="WEATHER CONDITION"
            value={weather_condition}
            setValue={setweather_condition}
            inputType="text"
            data={data && data.map((item: any) => item.weather_condition)}
            loading={loading}
          />

          <Dropdown
            title="LIGHT CONDITION"
            value={light_condition}
            setValue={setlight_condition}
            inputType="text"
            data={data && data.map((item: any) => item.light_condition)}
            loading={loading}
          />
          <Dropdown
            title="VISIBILITY"
            value={visibility}
            setValue={setvisibility}
            inputType="number"
            data={data && data.map((item: any) => item.visibility)}
            loading={loading}
          />
        </div> */}
        <button className="hero-button" onClick={() => handlePredict()}>
          Start Prediction
        </button>
      </div>
    </Fragment>
  )
}

export default Prediction
