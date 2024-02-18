import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  Group,
  Div,
  Button,
  Slider,
  Checkbox,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { generatePasswordFx } from "../api/generate";
import { IGenerate } from "../interfaces/IGenerate";

const Home = ({ id }: any) => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // const generatePassword = () => {
  //   let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   if (includeNumbers) chars += "0123456789";
  //   if (includeSymbols) chars += "!@#$%^&*()_+-=[]{};:<>?,.";
  //   let newPassword = "";
  //   for (let i = 0; i < length; i++) {
  //     newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   setPassword(newPassword);
  // };

  const createSettingPassword = () => {
    const data: IGenerate = {
      includeNumbers: includeNumbers,
      includeSymbols: includeSymbols,
      length: length,
    }
    return data;
  }

  const generatePassword = async () => {
    const settingPassword = createSettingPassword();
    const password: string = await generatePasswordFx(settingPassword);
    setPassword(password);
  }

  return (
    <Panel centered={true}>
      <PanelHeader>Генератор паролей</PanelHeader>
      <Group>
        <Div>
          <Slider
            step={1}
            min={6}
            max={32}
            value={length}
            onChange={(value) => setLength(value)}
          />
          <Checkbox
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          >
            Цифры
          </Checkbox>
          <Checkbox
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          >
            Символы
          </Checkbox>
          <Button size="l" stretched mode="primary" onClick={generatePassword}>
            Сгенерировать
          </Button>
        </Div>
        {password && (
          <Group>
            <Div style={{ cursor: "pointer" }}>
              <div
                style={{
                  padding: 12,
                  border: "1px solid var(--field_border)",
                  borderRadius: 8,
                  textAlign: "center",
                  wordBreak: "break-all",
                }}
              >
                {password}
              </div>
            </Div>
          </Group>
        )}
      </Group>
    </Panel>
  );
};

export default Home;
