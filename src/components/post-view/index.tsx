import { Avatar, Card, Group, Text, ActionIcon, Image, Stack, Center, Badge } from '@mantine/core'
import { IFPostView } from './../../types/index'
import { useNavigate } from 'react-router-dom'
import avatarfault from './../../assets/user.png'
import imageDfault from './../../assets/banner.png'
import { IconBookmark, IconHeart, IconMessageCircle2 } from '@tabler/icons'
import { timeAgoHepler } from '../../helpers'

type PostViewProps = {
  post: IFPostView
}
const listGradient = [
  { from: 'indigo', to: 'cyan' },
  { from: 'orange', to: 'red' },
  { from: 'teal', to: 'blue', deg: 60 },
  { from: 'teal', to: 'lime', deg: 105 },
  { from: '#ed6ea0', to: '#ec8c69', deg: 35 },
]
const PostView = (props: PostViewProps) => {
  const { title, image, id, content, countLike, tags, countComment, release_date, author } =
    props.post
  const navigate = useNavigate()

  return (
    <Stack style={{ minWidth: 310, cursor: 'pointer' }}>
      <Card.Section pt={18} pb={16} px={32} onClick={() => navigate(`/user/profile/${author.id}`)}>
        <Group align="center">
          <Avatar
            size={32}
            radius="xl"
            color="blue"
            src={author.avatar || avatarfault}
            alt="Avatar"
          />
          <div>
            <Text weight={600} size={14}>
              {author?.display_name}
            </Text>
            <Text size={12}>{timeAgoHepler(release_date)}</Text>
          </div>
        </Group>
      </Card.Section>
      <Card.Section px="md">
        <Group mb="xs">
          <Text weight={700} size={32}>
            {title}
          </Text>
        </Group>
      </Card.Section>

      <Card.Section px="md" mih={50}>
        <Group
          mb="xs"
          px="md"
          style={{ borderLeftWidth: '3px', borderLeftStyle: 'solid', borderColor: '#ce3df3' }}
        >
          <Text size="md">{content}</Text>
        </Group>
      </Card.Section>
      <Group px="md" mt="lg">
        {tags &&
          tags[0] &&
          tags.map((tag: any, index: number) => (
            <Badge key={index} size="lg" variant="gradient" gradient={listGradient[index]}>
              {tag.name}
            </Badge>
          ))}
      </Group>
      <Card.Section mt="lg" px="xs">
        <Image src={image || imageDfault} alt={title} height={330} radius="md" />
      </Card.Section>

      <Group
        position="center"
        grow
        mt={14}
        style={{
          padding: '12px',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#cfd6e6',
          borderRadius: 16,
        }}
      >
        <ActionIcon color="pink">
          <Group>
            <IconHeart />
            <Text weight={700} size="sm">
              Upvote
            </Text>
          </Group>
        </ActionIcon>
        <ActionIcon color="orange">
          <Group>
            <IconMessageCircle2 />
            <Text weight={700} size="sm">
              Comment
            </Text>
          </Group>
        </ActionIcon>
        <ActionIcon color="yellow">
          <Group>
            <IconBookmark />
            <Text weight={700} size="sm">
              Bookmark
            </Text>
          </Group>
        </ActionIcon>
      </Group>
      <Center mih={100}>
        <Text weight={500} size="sm" sx={{ opacity: 0.6 }}>
          Be the first to commet
        </Text>
      </Center>
    </Stack>
  )
}

export default PostView
