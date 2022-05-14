import { CssSkill } from "./CssSkill"
import { HtmlSkill } from "./HtmlSkill"
import { JsSkill } from "./JsSkill"
import { ReactSkill } from './ReactSkill'
import { GithubSkill } from './GithubSkill'

export const Skills = () => {


    return (
        <div className="w-1/2 space-y-2">
            <HtmlSkill />
            <CssSkill />
            <JsSkill />
            <ReactSkill />
            <GithubSkill />
        </div>
    )
}