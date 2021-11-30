import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";

import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { useDisclosure } from "@chakra-ui/hooks"
import { Input } from "@chakra-ui/input"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { StatLabel } from "@chakra-ui/stat";

import { GrUserAdd } from 'react-icons/gr';
import { FaUser } from 'react-icons/fa';
import { useAuth } from "../../contexts/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ModalCreateUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const bgHeader = useColorModeValue("#bca8e9", "#31274F")
  const bgBody = useColorModeValue("#F7FAFC", "#171923")
  const bgInput = useColorModeValue("#EDF2F7", "#0F1016")

  const [nameSignUp, setNameSignUp] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');

  const navigate = useNavigate();

  const { SignUp, Login } = useAuth();

  async function signUp() {
    await SignUp(
      nameSignUp,
      emailSignUp,
      passwordSignUp
    ).then(() => {
      Login(
        emailSignUp,
        passwordSignUp
      )
      window.location.reload();
    })
    return navigate('/')
  }

  async function handleSingUp() {
    signUp()
    onClose()
  }


  return (
    <div >
      <h1 onClick={onOpen}>
        Registre-se!
      </h1>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="30" w={[320, 350, 421]}>

          <ModalHeader
            bg={bgHeader}
            borderTopLeftRadius="30"
            borderTopRightRadius="30"
            display="flex"
            alignItems="center"
          >
            <FaUser />
            <StatLabel
              color="#fff"
              fontSize='18px'
              fontFamily="Inter"
              pl={15}
            >Criar Usuário
            </StatLabel>
            <ModalCloseButton color="#fff" size="15px" mr={"15px"} mt={"8px"} />
          </ModalHeader>

          <ModalBody
            bg={bgBody}
            w={["280", "300px", "357px"]}
            ml={30}
            mt={31}
            borderRadius="30"
          >

            <h1>Dados do seu usuário</h1>

            <FormControl
              display="flex"
              justifyContent="center"
              mt={29}
              mb={29}
            >
              <GrUserAdd size={70} color="#fff" />
            </FormControl>

            <FormControl
              display="flex"
              justifyContent="space-between"
            >
              <FormLabel mb={-3}>Nome</FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel
                color="#F5565C"
                fontSize='10px'
                fontFamily="Inter"
                textAlign={["right"]}
              >* OBRIGATÓRIO
              </FormLabel>
              <Input
                bg={bgInput}
                placeholder="Digite o seu nome..."
                mt={-2} border={0}
                value={nameSignUp}
                onChange={(event) => { setNameSignUp(event.target.value) }}
              />
            </FormControl>

            <FormControl
              display="flex"
              justifyContent="space-between"
            >
              <FormLabel pt={18.75} mb={-3}>E-mail</FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel
                color="#F5565C"
                fontSize='10px'
                fontFamily="Inter"
                textAlign={["right"]}
              >* OBRIGATÓRIO
              </FormLabel>
              <Input
                bg={bgInput}
                placeholder="Digite o seu e-mail..."
                mt={-2} border={0}
                value={emailSignUp}
                onChange={(event) => { setEmailSignUp(event.target.value) }}
              />
            </FormControl>

            <FormControl display="flex" justifyContent="space-between">
              <FormLabel pt={18.75} mb={-3}>Senha</FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel
                color="#F5565C"
                fontSize='10px'
                fontFamily="Inter"
                textAlign={["right"]}
              >* OBRIGATÓRIO
              </FormLabel>
              <Input
                bg={bgInput}
                placeholder="•••••••••••"
                mt={-2} border={0}
                value={passwordSignUp}
                onChange={(event) => { setPasswordSignUp(event.target.value) }}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <Button
              bg="#805AD5"
              w={"180px"} h={"44px"}
              color="#fff"
              type="submit"
              onClick={handleSingUp}
            >
              Criar Usuário
            </Button>
          </ModalFooter>
        </ModalContent >
      </Modal>
    </div>
  )
}