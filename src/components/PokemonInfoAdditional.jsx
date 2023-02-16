import { List } from '@mui/material'
import AccordionInfo from '../components/AccordionInfo'
import ListItemBasic from '../components/ListItemsBasic'

export default function PokemonInfoAdditional({
  gameIndices,
  moves,
  abilities,
  forms,
  stats,
  types,
}) {
  return (
    <>
      <AccordionInfo title="Game indices">
        <List>
          {gameIndices?.map((item, index) => (
            <ListItemBasic
              key={index}
              icon={index + 1}
              title={`game index:${item.game_index}`}
              subtitle={`version name:${item.version.name}`}
            />
          ))}
        </List>
      </AccordionInfo>

      <AccordionInfo title="Moves">
        <List>
          {moves?.map((item, index) => (
            <ListItemBasic
              key={index}
              icon={index + 1}
              title={item.move.name}
            />
          ))}
        </List>
      </AccordionInfo>

      <AccordionInfo title="Abilities">
        <List>
          {abilities?.map((item, index) => (
            <ListItemBasic
              key={index}
              icon={index + 1}
              title={item.ability.name}
              subtitle={`Hidden: ${item.is_hidden ? 'Yes' : 'No'} , slot: ${
                item.slot
              }`}
            />
          ))}
        </List>
      </AccordionInfo>

      <AccordionInfo title="Forms">
        <List>
          {forms?.map((item, index) => (
            <ListItemBasic key={index} icon={index + 1} title={item.name} />
          ))}
        </List>
      </AccordionInfo>

      <AccordionInfo title="Stats">
        <List>
          {stats?.map((item, index) => (
            <ListItemBasic
              key={index}
              icon={index + 1}
              title={`${item.stat.name}:${item.base_stat} `}
              subtitle={`efford: :${item.effort}`}
            />
          ))}
        </List>
      </AccordionInfo>

      <AccordionInfo title="Types">
        <List>
          {types?.map((item, index) => (
            <ListItemBasic
              key={index}
              icon={index + 1}
              title={`type name: ${item.type.name} `}
              subtitle={`slot: ${item.slot}`}
            />
          ))}
        </List>
      </AccordionInfo>
    </>
  )
}
