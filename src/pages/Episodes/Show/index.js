import React, { useEffect } from "react";
import { FormItem, Form } from "../../../components";
import { Row, Container, Col } from "../../../components/Grid";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import useForm from "../../../hooks/formHook";
import { connect } from "react-redux";
import {
  createEpisode,
  fetchEpisode,
  updateEpisode,
} from "../../../actions/episodes";
import { fetchMediaItems } from "../../../actions/media";
import { getMediaTitlesByType } from "./utils";
import {
  categoryOptions,
  typeOptions,
} from "../../../resources/tableDefinitions";
// import "./style.css";

const EpisodesShow = ({
  match,
  fetchEpisode,
  fetchMediaItems,
  episode,
  ...props
}) => {
  let id;
  const { form, updateForm, setForm } = useForm();

  useEffect(() => {
    id = match.params.id;
    if (!id) {
      return;
    }
    fetchEpisode(id);
    setInitVals(episode);
  }, [episode._id, match]);

  useEffect(() => {
    fetchMediaItems();
  }, [fetchMediaItems]);

  const changeInput = (e) => {
    const obj = { id: e.target.id, value: e.target.value };
    updateForm(obj);
  };

  const submitForm = () => {
    id = props.match.params.id;
    const formItems = {
      title: form.title,
      type: form.type,
      category: form.category,
      tags: form.tags,
      videoLink: form.videoLink,
      thumbnail: form.thumbnail,
      desc: form.description,
      releaseDate: form.releaseDate,
    };

    if (!id) {
      return props.createEpisode(formItems);
    }

    return props.updateEpisode(formItems, id);
  };

  const setInitVals = (data) => {
    let initVals = data;
    if (!initVals) {
      return;
    }

    const values = {
      title: initVals.title,
      type: initVals.type,
      category: initVals.category,
      tags: initVals.tags,
      thumbnail: initVals.thumbnail,
      description: initVals.desc,
      videoLink: initVals.videoLink,
      releaseDate: initVals.releaseDate,
    };

    setForm(values);
  };

  if (props.loading) {
    return "Loading...";
  }
  return (
    <div>
      <h3>Episodes Show</h3>
      {/* <Form>
        <div>
          <Col sm={12}>
            <FormItem>
              <Input
                id="title"
                placeholder="Title"
                value={form.title}
                onChange={changeInput}
              />
            </FormItem>
          </Col>
          <Col sm={6}>
            <FormItem>
              <Select
                options={typeOptions}
                id="type"
                placeholder="Select a Type"
                value={form.type}
                onChange={changeInput}
              />
            </FormItem>
          </Col>
          <Col sm={6}>
            <FormItem>
              <Select
                options={categoryOptions}
                id="category"
                placeholder="Select a Category"
                value={form.category}
                onChange={changeInput}
              />
            </FormItem>
          </Col>
          <Col sm={12}>
            <FormItem>
              <Input
                id="tags"
                placeholder="Tags"
                value={form.tags}
                onChange={changeInput}
              />
            </FormItem>
          </Col>
          <Col sm={12}>
            <FormItem>
              <Input
                id="description"
                placeholder="Description"
                value={form.description}
                onChange={changeInput}
              />
            </FormItem>
          </Col>
          <Col sm={12}>
            <FormItem>
              <Input
                id="releaseDate"
                placeholder="Release Date"
                value={form.releaseDate}
                onChange={changeInput}
              />
            </FormItem>
          </Col>
          <Col sm={6}>
            <FormItem>
              <Select
                options={getMediaTitlesByType(
                  props.mediaItems,
                  "episode/promo"
                )}
                id="videoLink"
                placeholder="Select a Video"
                value={form.videoLink}
                onChange={changeInput}
              />
            </FormItem>
          </Col>
          <Col sm={6}>
            <FormItem>
              <Select
                options={getMediaTitlesByType(props.mediaItems, "thumbnail")}
                id="thumbnail"
                placeholder="Select a Thumbnail"
                value={form.thumbnail}
                onChange={changeInput}
              />
            </FormItem>
          </Col>
          <EpisodeMedia 
                            items={props.mediaItems}
                            form={form}
                            changeInput={changeInput}
                        />
          <Button
            form={form}
            changeInput={changeInput}
            type="button"
            onClick={submitForm}
            title="Submit Form"
          />
        </div>
      </Form> */}
    </div>
  );
};

function mapStateToProps({ loading, episode, mediaItems }) {
  return { loading, episode, mediaItems };
}

export default connect(mapStateToProps, {
  createEpisode,
  fetchEpisode,
  updateEpisode,
  fetchMediaItems,
})(EpisodesShow);
