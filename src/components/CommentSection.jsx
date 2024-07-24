import React from 'react';
import { Box, Textarea, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const CommentSection = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea {...register("comment")} placeholder="Votre commentaire" />
        <Button type="submit" mt={6}>Envoyer</Button>
      </form>
      {/* Affichage des commentaires existants */}
    </Box>
  );
};

export default CommentSection;
