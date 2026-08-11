import {type SchemaTypeDefinition} from 'sanity'
import {mainLineType} from './mainLine'
import {featureProjects} from './featuredProjects'
import {aboutMe} from './aboutMe'

export const schemaTypes: SchemaTypeDefinition[] = [mainLineType, featureProjects, aboutMe]
