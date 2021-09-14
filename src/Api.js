export const login = async (data) => {
  const response = await fetch("https://api.gofaaa.com/rest-auth/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
