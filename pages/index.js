import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useRouter } from "next/router";
import React from "react";
import appConfig from "../config.json";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        // normaliza estilo para qualquer tag
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//   // JSX
//   return (
//     <div>
//       <GlobalStyle />
//       <Titulo tag="h1">Boas vindas de volta!</Titulo>
//       <h2>Discord - Alura Matrix</h2>
//     </div>
//   );
// }
//export default HomePage;

export default function PaginaInicial() {
  const [username, setUsername] = React.useState("gabrielleadriano");
  const roteamento = useRouter();
  const [userValido, setUserValido] = React.useState(username.length > 2);

  return (
    <>
    {/* Box é a mesma coisa que div */}
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(event) => {
              // evita recarregar página
              event.preventDefault();
              roteamento.push("/chat");
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name} ({username})
            </Text>

            {/* <input
              type="text"
              value={username}
              onChange={(event) => {
                const valor = event.target.value;
                setUsername(valor);
              }}
            /> */}
            {
              <TextField
                value={username}
                onChange={(event) => {
                  const valor = event.target.value;
                  setUsername(valor);
                  setUserValido(valor.length > 2);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
            }
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={userValido ? `https://github.com/${username}.png` : ''}
            />
            {/* <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={source}
            /> */}
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {userValido ? username : ''}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
