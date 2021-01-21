// const ACCESS_TOKEN_URL = 'https://api.instagram.com/oauth/access_token \
// -F client_id=197370132112746 \
// -F client_secret=795f46dacdc5b878fa7315ec2cd0aab8 \
// -F grant_type=authorization_code \
// -F redirect_uri=https://www.maggie-navracruz.com/ \
// -F code=AQD6Yy-Qd85s-_Iwp2kSTKy117PzbMn0vKq90zBSMZfAqfmKqN-kb1swbMxoaDCg0roRyWFf0WRdhiI_g0-PssQ5leiWIprIh4K2Tifkbz1p13UW07WDLBmoEXYPhgjFgPRdBqC5f-bSITRROOP1CuUinyu2PMammy4yZOn8gNk3JB_E8Ja3fOFmRF_0IRR692nYlMAX6AnwWovUzKUZXiJXXlp782itdRxuVP_m2zjphw
const URL = "https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp&access_token="

// IGQVJYWVpteWNCLUpuTTF6WHJDS1RJZAjlBNkg5VU5XSEhvLUwzTzFBanJVa0YySUZAXRHlLR1Jrb2FEOTdTci13TzBjNU1vemx2Q0p0djhCWWFpWFM1a3ZAMNF9uSWlCSGs4Sk42ZAzZAtU3ROcHJaYTBROV9UUDVQaFQ3OXc4

export const getAccessToken = () =>
    fetch(`${URL}/${artistId}/createSong`, {
      method: "POST",
      body: JSON.stringify({
        ...song
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => response.json());

export const getImgData = () =>
    fetch(`${URL}`)
        .then(response => response.json())

export default { getImgData }

// https://api.instagram.com/oauth/access_token&client_id=197370132112746&client_secret=795f46dacdc5b878fa7315ec2cd0aab8&grant_type=authorization_code&redirect_uri=https://www.maggie-navracruz.com/&code=AQD6Yy-Qd85s-_Iwp2kSTKy117PzbMn0vKq90zBSMZfAqfmKqN-kb1swbMxoaDCg0roRyWFf0WRdhiI_g0-PssQ5leiWIprIh4K2Tifkbz1p13UW07WDLBmoEXYPhgjFgPRdBqC5f-bSITRROOP1CuUinyu2PMammy4yZOn8gNk3JB_E8Ja3fOFmRF_0IRR692nYlMAX6AnwWovUzKUZXiJXXlp782itdRxuVP_m2zjphw