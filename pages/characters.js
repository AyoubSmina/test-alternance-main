import useCharactersList from "components/Characters/utils/useCharactersList";

import ListWrapper from "components/Characters/ListWrapper";
import CharacterCard from "components/Characters/CharacterCard";

import ErrorMessage from "components/GeneralUI/ErrorMessage";
import Loader from "components/GeneralUI/Loader";

export default function Characters() {
  const { loading, error, characters, pageInfo } = useCharactersList();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  return (
    <>
      <h2>Liste des personnages</h2>
      <ListWrapper>
        {
          characters.map((data)=>{
            console.log(data)
            return <CharacterCard key={data.id} data={data}/>
          })
      }
      </ListWrapper>
    </>
  );
}
