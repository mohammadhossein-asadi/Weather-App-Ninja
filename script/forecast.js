const key = "IVARrjZAiQb4xvifjwuaH34rAS0fGxjc";

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apiKey=$${key}$q=${city}`;

  const response = await fetch(base + query);
};
