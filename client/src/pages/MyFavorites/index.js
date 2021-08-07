// imports.....................................................
import React, { useEffect, useState } from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Dropdown, Button } from "semantic-ui-react";
import { QUERY_ME } from "../../utils/queries";
import { REMOVE_FAVORITE_CITY } from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import cityList from "../../utils/cities";
import { ToastsContainer, ToastsStore } from "react-toasts";

const MyFavorites = () => {
  const [cityValue, setCityValue] = useState(null);
  const cityChange = (e, { value }) => {
    setCityValue(value);
  };
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || [];
  const favCities = [];
  if (cityList && user.favorites) {
    cityList.forEach((city) => {
      user.favorites.forEach((data) => {
        if (parseInt(data) === city.id) {
          favCities.push(city);
        }
      });
    });
  }
  const [removeCity] = useMutation(REMOVE_FAVORITE_CITY, {
    update(cache, { data: { removeCity } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { removeCity, ...me } },
        });
      } catch (e) {
        ToastsStore.error(`${e}`);
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me.favorites } },
      });
    },
  });
  const handleDeleteCity = async () => {
    try {
      await removeCity({
        variables: { cityValue: cityValue },
      });
      ToastsStore.success(`Removed city from favorites`);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (favCities.length === 0) {
      ToastsStore.warning(`Head over to a city and add it to your favorites!`);
    }
  }, []);
  const cityOptions = [];
  for (let i = 0; i < favCities.length; i++) {
    cityOptions.push({
      key: `${i + 1}`,
      text: `${favCities[i].city}`,
      value: `${favCities[i].id}`,
    });
  }
  return (
    <div>
      <Nav />
      <ToastsContainer store={ToastsStore} />
      <div style={{ paddingBottom: "30rem" }}>
        {favCities.length === 0 ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem 0",
              }}
            >
              <h2>You don't have any favorite cities...</h2>
            </div>
            <div
              style={{
                paddingBottom: "30rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://media.giphy.com/media/ads2QSp4JDdeg/giphy.gif"
                alt="not found"
              />
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1 style={{ marginTop: "5rem" }}>Remove a city</h1>
              <Dropdown
                onChange={cityChange}
                options={cityOptions}
                placeholder="Select a destination..."
                selection
                name="destination"
              />
              <Button
                style={{ marginTop: "1rem" }}
                color="red"
                onClick={() => handleDeleteCity()}
              >
                Remove
              </Button>
            </div>
            <div className="city-result-title">
              <h1>My Favorites</h1>
            </div>
            <div className="search-city-display">
              <Card.Group centered>
                {favCities.map((cityInfo) => {
                  if (cityInfo.image === "") {
                    return (
                      <Card
                        image={
                          "https://cdn.pixabay.com/photo/2015/03/26/09/48/buildings-690364__340.jpg"
                        }
                        header={cityInfo.city}
                        meta={cityInfo.country}
                        className="city-card"
                        key={cityInfo.city}
                        href={"/search/" + cityInfo.id}
                        color="red"
                      />
                    );
                  } else {
                    return (
                      <Card
                        image={cityInfo.image}
                        header={cityInfo.city}
                        meta={cityInfo.country}
                        className="city-card"
                        key={cityInfo.city}
                        href={"/search/" + cityInfo.id}
                        color="red"
                      />
                    );
                  }
                })}
              </Card.Group>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyFavorites;
